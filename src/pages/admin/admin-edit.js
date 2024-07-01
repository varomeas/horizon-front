// Importation des dépendances nécessaires
import styles from "./admin.module.scss";
import {useEffect, useRef, useState} from "react";
import Quill from "quill"; // Éditeur de texte riche
import {useNavigate, useParams} from "react-router-dom"; // Gestion de la navigation et des paramètres d'URL
import Menu from "../../components/header/header";
import {Box, MenuItem, TextField} from "@mui/material"; // Composants Material-UI
import AdminArticle from "../../components/card-article-admin/card-article-admin";
import Footer from "../../components/footer/footer";
import axios from "axios"; // Client HTTP basé sur les promesses

function AdminEdit() {

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

    const navigate = useNavigate(); // Fonction pour naviguer entre les routes
    const {id } = useParams(); // Récupération de l'ID de l'article à partir des paramètres d'URL

    const token = localStorage.getItem('token'); // Récupération du token de l'utilisateur à partir du stockage local

    // Vérification que l'utilisateur est connecté
    useEffect(() => {
        if (!token) {
            navigate('/connexion_admin'); // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
        }
    }, [navigate]);

    const [article, setArticle] = useState([]); // État pour stocker les données de l'article

    // Récupération des données de l'article à partir de l'API lors du chargement du composant
    useEffect(() => {
        axiosInstance.get(`/articles/${id}`)
            .then(response => {
                const data = response.data;
                setArticle(data); // Mise à jour de l'état de l'article avec les données récupérées
                setState({ // Mise à jour de l'état du formulaire avec les données de l'article
                    title: data.title || '',
                    description: data.headline || '',
                    category: 1,
                    content: data.content || '',
                    photo: null,
                });
            })
            .catch(error => console.error('Erreur:', error)); // Gestion des erreurs
    }, [id]);

    const quillInstanceRef = useRef(null); // Référence pour stocker l'instance de Quill
    const quillRef = useRef(null); // Référence pour stocker l'éditeur Quill

    const textContenu = article.content; // Contenu de l'article

    // Initialisation de l'éditeur Quill lors du chargement du composant
    useEffect(() => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current, {
                theme: 'snow', // Spécifie le thème à utiliser
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
            quillInstanceRef.current = quill; // Stockage de l'instance de Quill
            quill.setContents([
                { insert: textContenu } // Insertion du contenu de l'article dans l'éditeur
            ]);
        }
    }, []);

    // Options pour le champ de sélection de la catégorie
    const currencies = [
        {
            value: '1',
            label: 'Santé',
        },
        {
            value: '2',
            label: 'Transport',
        },
        {
            value: '3',
            label: 'Alimentation',
        },
        {
            value: '4',
            label: 'Loisirs',
        },
        {
            value: '5',
            label: 'Autre',
        },
    ];

    // État pour stocker les valeurs du formulaire
    const [state, setState] = useState({
        title: '',
        category: 1,
        description: '',
        content: '',
        photo: null,
    });

    // Gestionnaire d'événements pour les changements de valeur des champs du formulaire
    const InputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
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

    let user = localStorage.getItem('username'); // Récupération du nom d'utilisateur à partir du stockage local

    // Gestionnaire d'événements pour la soumission du formulaire
    const formSubmit = (event) => {
        event.preventDefault();

        const champsQuill = quillInstanceRef.current;
        let content = champsQuill.getSemanticHTML(0, champsQuill.getLength());
        const trimmedContent = content.replace(/\s/g, '');

        // Vérifie si le contenu ne contient que des balises <p> vides
        if (/^<p><\/p>$/.test(trimmedContent)) {
            content = article.content;
        }
        const formData = new FormData();
        formData.append('title', state.title);
        formData.append('headline', state.description);
        formData.append('categoryIds', state.category);
        formData.append('content', content);
        formData.append('image', state.photo);

        // Envoi des données du formulaire à l'API
        axiosInstance.put(`/articles/${id}`, formData)
            .then(response => {
                console.log(response.data);
                alert('Article créé avec succès');
                navigate('/categorie/Transport/article/' + article.id)
            })
            .catch(error => {

                console.error(error);
                alert("Erreur, la création de l'article n'a pas fonctionné")
            });
    }

    // Rendu du composant
    return (
        <>
            <Menu></Menu>
            <main className={styles.admin}>
                <h1>Espace administrateur de {user}</h1>
                <section>
                    <h2>Modifier un article</h2>
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
                        <button className={"btn"}>Modifier l'article</button>
                    </Box>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default AdminEdit;