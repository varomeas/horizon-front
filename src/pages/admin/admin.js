// Importation des dépendances nécessaires
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./admin.module.scss";
import {Box, Button, MenuItem, TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {globalRegistry} from "quill/core/quill";
import AdminArticle from "../../components/card-article-admin/card-article-admin";
import axios from "axios";

// Définition du composant Admin
function Admin() {
    // Création d'une instance d'axios avec une configuration par défaut
    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:8080/api/',
        timeout: 5000,
        headers: {
            'Authorization': `${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
    });

    // Interception des réponses pour gérer le rafraîchissement du token
    axiosInstance.interceptors.response.use(async config => {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refresh_token');

        // Si un token existe, vérifie sa date d'expiration
        if(token) {
            const tokenExp = JSON.parse(atob(token.split('.')[1])).exp;
            const currentTime = Date.now() / 1000;

            // Si le token expire dans moins d'une heure, demande un nouveau token
            if (tokenExp - currentTime < 60 * 30) {
                try {
                    const response = await axiosInstance.post('/auth/refresh-token', {
                        refresh_token: refreshToken
                    }, {
                        headers: {
                            'Authorization': `${token}`,
                        }
                    });

                    // Stocke le nouveau token dans le local storage
                    localStorage.setItem('token', response.data.token);

                    // Met à jour le token pour la requête en cours
                    config.headers['Authorization'] = `Bearer ${response.data.token}`;
                } catch (error) {
                    console.error(error);
                }
            }

            // Si le token est expiré, supprime le token du local storage
            if (tokenExp < currentTime) {
                localStorage.removeItem('token');
            }
        }

        return config;
    }, error => {
        return Promise.reject(error);
    });

    // Utilisation du hook useNavigate pour la navigation
    const navigate = useNavigate();

    // Récupération du token et du nom d'utilisateur du local storage
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('username');

    // Vérification que l'utilisateur est connecté
    useEffect(() => {
        if (!token) {
            navigate('/connexion_admin');
        }
        if(token){
            const tokenExp = JSON.parse(atob(token.split('.')[1])).exp;
            const currentTime = Date.now() / 1000;
            if (tokenExp < currentTime) {
                // Si le token est expiré, suppression du session storage
                localStorage.removeItem('token');
                navigate('/connexion_admin');
            }
        }

    }, [navigate, token]);

    // État pour stocker les articles
    const [articles, setArticles] = useState([]);

    // Récupération des articles lors du chargement du composant
    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/articles/')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

    // Références pour stocker l'éditeur Quill et son instance
    const quillInstanceRef = useRef(null);
    const quillRef = useRef(null);

    // Initialisation de l'éditeur Quill lors du chargement du composant
    useEffect(() => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current, {
                theme: 'snow',
                placeholder: 'Rédigez votre article ici...',
                modules: {
                    toolbar: [
                        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                        [{size: []}],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{'list': 'ordered'}, {'list': 'bullet'},
                            {'indent': '-1'}, {'indent': '+1'}],
                        ['link', 'image', 'video'],
                        ['clean']
                    ]
                },
            });
            quillInstanceRef.current = quill;
        }
    }, []);

    // Options pour le champ de sélection de la catégorie
    const currencies = [
        {
            value: 1,
            label: 'Santé',
        },
        {
            value: 2,
            label: 'Transport',
        },
        {
            value: 3,
            label: 'Alimentation',
        },
        {
            value: 4,
            label: 'Loisirs',
        },
        {
            value: 5,
            label: 'Autre',
        },
    ];

    // État pour stocker les valeurs du formulaire
    const [state, setState] = useState({
        title: "",
        category: 1,
        description: "",
        content: "",
        photo: null,
    });

    // Gestionnaire d'événements pour les changements de valeur des champs du formulaire
    const InputChange = (event) => {
        const { name, value } = event.target;
        setState((props) => ({
            ...props,
            [name]: value,
        }));
    };

    // Gestionnaire d'événements pour le changement de fichier
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setState((props) => ({
            ...props,
            photo: file,
        }));
    };

    // Gestionnaire d'événements pour la soumission du formulaire
    const formSubmit = (event) => {
        event.preventDefault();

        const champsQuill = quillInstanceRef.current;
        const content = champsQuill.getSemanticHTML(0, champsQuill.getLength());

        const formData = new FormData();
        formData.append('title', state.title);
        formData.append('headline', state.description);
        formData.append('author', user);
        formData.append('categoryIds', state.category);
        formData.append('content', content);
        formData.append('image', state.photo);

        // Envoi des données du formulaire à l'API
        axiosInstance.post('/articles/', formData)
            .then(response => {
                console.log(response.data);
                alert('Article créé avec succès');
                navigate('/categorie/transport/article/' + response.data.id)
            })
            .catch(error => {
                console.error(error);
                alert("Erreur, la création de l'article n'a pas fonctionné")
            });
    }

    // Fonction pour supprimer un article
    const deleteArticle = (id) => {
        axiosInstance.delete(`/articles/${id}`)
            .then(response => {
                alert('Article supprimé avec succès');
                setArticles(articles.filter(article => article.id !== id));
                console.log(response.data);
            })
            .catch(error => {
                alert('Erreur, la suppression de l\'article n\'a pas fonctionné');
                console.error(error);
            });
    };

    // Fonction pour se déconnecter
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        // Recharge la page
        window.location.reload();
    };

    // Fonction pour supprimer tous les articles
    const deleteAllarticles = () => {
        axiosInstance.delete(`/articles/`)
            .then(response => {
                alert('Tous les article ont été supprimés avec succès!');
                setArticles([]);
            })
            .catch(error => {
                alert('Erreur, la suppression des articles n\'a pas fonctionné');
                console.error(error);
            });
    }

    // Rendu du composant
    return (
        <>
            <Menu></Menu>
            <main className={styles.admin}>
                <h1>Bienvenue sur votre espace administrateur {user}</h1>
                <section>
                    <h2>Créer un nouvel article</h2>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={formSubmit}
                    >
                        <div className={styles.formulaire}>
                            <TextField
                                required
                                className={"input"}
                                name={"title"}
                                id="outlined-required"
                                label="Titre"
                                onChange={InputChange}
                            />
                            <TextField
                                className={"input"}
                                id="outlined-select-currency"
                                select
                                label="Catégorie de l'article"
                                helperText="Sélectionnez à quelle catégorie appartient l'article"
                                name={"category"}
                                defaultValue="1"
                                onChange={InputChange}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className={"input"}
                                id="outlined-multiline-static"
                                name={"description"}
                                label="Description de l'article"
                                multiline
                                rows={4}
                                onChange={InputChange}
                            />
                            <div ref={quillRef} className={"input"}>

                            </div>
                            <label>Ajouter une photo à l'article</label>
                            <TextField
                                className={"input"}
                                type="file"
                                name="photo"
                                onChange={handleFileChange}
                            />
                        </div>
                        <button className={"btn"}>Créer l'article</button>
                    </Box>
                </section>
                <section>
                    <div className={styles.titre_liste_article}>
                        <h2>Liste des articles existants</h2>
                        <button className={`btn ${styles.btn_delete}`} onClick={deleteAllarticles}>Effacer tous les articles</button>
                    </div>

                    <div className={styles.articles}>
                        {articles.length > 0 ? (
                            articles.map(article => (
                                <AdminArticle key={article.id} id={article.id} title={article.title} description={article.headline} category={article.category} onDelete={deleteArticle}/>
                            ))
                        ) : (
                            <p>Aucun article existant!</p>
                        )}
                    </div>
                </section>

            </main>
            <div className={styles.logout}>
                <button className={`btn ${styles.btn_logout}`} onClick={handleLogout}>Se déconnecter</button>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Admin;