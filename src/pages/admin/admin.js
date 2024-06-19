import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./admin.module.scss";
import {Box, MenuItem, TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {globalRegistry} from "quill/core/quill";
import AdminArticle from "../../components/card-article-admin/card-article-admin";
import axios from "axios";



function Admin() {
    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:8080/api/',
        timeout: 5000,
        headers: {
            'Authorization': `${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
    });

    axiosInstance.interceptors.response.use(async config => {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refresh_token');

        // Vérifiez si le token est sur le point d'expirer
        // Note : Cela dépend de la façon dont vous stockez votre token.
        // Dans cet exemple, on suppose que le token est un JWT et qu'il contient une propriété `exp` qui indique quand le token expire.
        const tokenExp = JSON.parse(atob(token.split('.')[1])).exp;
        const currentTime = Date.now() / 1000;

        if (tokenExp - currentTime < 60 * 30) { // Si le token expire dans moins d'une heure
            try {
                // Demande un nouveau token
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

        if (tokenExp < currentTime) {
            // Si le token est expiré, supprimez-le du session storage
            localStorage.removeItem('token');
        }

        return config;
    }, error => {
        return Promise.reject(error);
    });

    const navigate = useNavigate();
    //Récupération du token
    const token = localStorage.getItem('token');
    //vérifier que l'utilisateur est connecté
    useEffect(() => {
        if (!token) {
            navigate('/connexion_admin');
        }
        const tokenExp = JSON.parse(atob(token.split('.')[1])).exp;
        const currentTime = Date.now() / 1000;
        if (tokenExp < currentTime) {
            // Si le token est expiré, supprimez-le du session storage
            localStorage.removeItem('token');
            navigate('/connexion_admin');
        }
    }, [navigate, token]);

    const [articles, setArticles] = useState([]);
// récupérer tous les articles pour le dashboard
    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/articles/')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

    const quillInstanceRef = useRef(null);
    const quillRef = useRef(null); // Crée une référence pour stocker l'éditeur Quill

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
                // Ajoutez d'autres options ici si nécessaire
            });
            quillInstanceRef.current = quill;
        }
    }, []);



    const currencies = [
        {
            value: 'Santé',
            label: 'Santé',
        },
        {
            value: 'Transport',
            label: 'Transport',
        },
        {
            value: 'Alimentation',
            label: 'Alimentation',
        },
        {
            value: 'Loisirs',
            label: 'Loisirs',
        },
        {
            value: 'Autre',
            label: 'Autre',
        },
    ];

    const [state, setState] = useState({
        title: "",
        category: "",
        description: "",
        content: "",
        photo: null,
    });

    const InputChange = (event) => {
        const { name, value } = event.target;
        setState((props) => ({
            ...props,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setState((props) => ({
            ...props,
            photo: file,
        }));
    };


    const formSubmit = (event) => {
        event.preventDefault();

        const champsQuill = quillInstanceRef.current;
        const content = champsQuill.getSemanticHTML(0, champsQuill.getLength());

        const formData = new FormData();
        formData.append('title', state.title);
        formData.append('headline', state.description);
        formData.append('author', "1");
        formData.append('category', state.category);
        formData.append('content', content);
        formData.append('image', state.photo);
        console.log(formData);
        /*const dataJson = JSON.stringify({
            title: state.title,
            description: state.description,
            author: "1",
            category: state.category,
            content: content,
            image: state.photo
        });*/

        /*const init = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
            body: dataJson
        };
        console.log(init)
        fetch("http://127.0.0.1:8080/api/articles/", init)
            .then((response) => {
                if(response.status === 200){
                    alert('Article créé avec succès');
                    //let data = response.json();
                }
                else{
                    alert("Erreur, la création de l'article n'a pas fonctionné")
                }
                return response.json();
            })
            .then(function (data) {
                navigate('/categorie/transport/article/' + data.id)
            })
            .catch(function (error) {
                console.log(error);
            });*/
        axiosInstance.post('/articles/', formData)
            .then(response => {
                // Gérez la réponse ici
                console.log(response.data);
                alert('Article créé avec succès');
                navigate('/categorie/transport/article/' + response.data.id)
            })
            .catch(error => {
                // Gérez l'erreur ici
                console.error(error);
                alert("Erreur, la création de l'article n'a pas fonctionné")
            });

    }

    const deleteArticle = (id) => {
        /*fetch(`http://127.0.0.1:8080/api/articles/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `${token}`,
            }
        })
            .then((response) => {
                if(response.ok) {
                    setArticles(articles.filter(article => article.id !== id));
                    alert('Article supprimé avec succès')
                } else {
                    alert('Erreur, la suppression de l\'article n\'a pas fonctionné');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });*/

        axiosInstance.delete(`/articles/${id}`)
            .then(response => {
                // Gérez la réponse ici
                alert('Article supprimé avec succès');
                setArticles(articles.filter(article => article.id !== id));
                console.log(response.data);
            })
            .catch(error => {
                // Gérez l'erreur ici
                alert('Erreur, la suppression de l\'article n\'a pas fonctionné');
                console.error(error);
            });
    };

  return (
    <>
        <Menu></Menu>
        <main className={styles.admin}>
            <h1>Bienvenue sur votre espace administrateur NOM</h1>
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
                            name={"title"}
                            id="outlined-required"
                            label="Titre"
                            onChange={InputChange}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Catégorie de l'article"
                            helperText="Sélectionnez à quelle catégorie appartient l'article"
                            name={"category"}
                            defaultValue="Santé"
                            onChange={InputChange}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-multiline-static"
                            name={"description"}
                            label="Description de l'article"
                            multiline
                            rows={4}
                            onChange={InputChange}
                        />
                        <div ref={quillRef}>

                        </div>
                        <label>Ajouter une photo à l'article</label>
                        <TextField
                            type="file"
                            name="photo"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button className={"btn"}>Créer l'article</button>
                </Box>
            </section>
            <section>
                <h2>Liste des articles existants</h2>
                <div className={styles.articles}>
                    {articles.map(article => (
                        <AdminArticle key={article.id} id={article.id} title={article.title} description={article.headline} category={article.category} onDelete={deleteArticle}/>
                    ))}
                </div>
            </section>

        </main>
        <Footer></Footer>
    </>
  );
}

export default Admin;