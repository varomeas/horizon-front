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


function Admin() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    //vérifier que l'utilisateur est connecté
    useEffect(() => {
        if (!token) {
            navigate('/connexion_admin');
        }
    }, [navigate]);

    const [articles, setArticles] = useState([]);

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
        content: ""
    });

    const InputChange = (event) => {
        const { name, value } = event.target;
        setState((props) => ({
            ...props,
            [name]: value,
        }));
    };

    const formSubmit = (event) => {
        event.preventDefault();

        const champsQuill = quillInstanceRef.current;
        const content = champsQuill.getSemanticHTML(0, champsQuill.getLength());

        const dataJson = JSON.stringify({
            title: state.title,
            //category: state.category,
            content: content,
        });
        const init = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
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
            });

    }

    const deleteArticle = (id) => {
        fetch(`http://127.0.0.1:8080/api/articles/${id}`, {
            method: 'DELETE',
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
                    </div>
                    <button className={"btn"}>Créer l'article</button>
                </Box>
            </section>
            <section>
                <h2>Liste des articles existants</h2>
                <div className={styles.articles}>
                    {articles.map(article => (
                        <AdminArticle key={article.id} id={article.id} title={article.title} description={article.description} category={article.category} onDelete={deleteArticle}/>
                    ))}
                </div>
            </section>

        </main>
        <Footer></Footer>
    </>
  );
}

export default Admin;