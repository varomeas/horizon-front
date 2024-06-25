import styles from "./admin.module.scss";
import {useEffect, useRef, useState} from "react";
import Quill from "quill";
import {useNavigate, useParams} from "react-router-dom";
import Menu from "../../components/header/header";
import {Box, MenuItem, TextField} from "@mui/material";
import AdminArticle from "../../components/card-article-admin/card-article-admin";
import Footer from "../../components/footer/footer";
import axios from "axios";

function AdminEdit() {

    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:8080/api/',
        timeout: 5000,
        headers: {
            'Authorization': `${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
    });

    const navigate = useNavigate();
    const {id } = useParams();

    const token = localStorage.getItem('token');
    //vérifier que l'utilisateur est connecté
    useEffect(() => {
        if (!token) {
            navigate('/connexion_admin');
        }
    }, [navigate]);

    const [article, setArticle] = useState([]);

    useEffect(() => {
        axiosInstance.get(`/articles/${id}`)
            .then(response => {
                const data = response.data;
                setArticle(data);
                setState({
                    title: data.title || '',
                    description: data.headline || '',
                    category: 1,
                    content: data.content || '',
                    photo: null,
                });
            })
            .catch(error => console.error('Erreur:', error));
    }, [id]);

    const quillInstanceRef = useRef(null);
    const quillRef = useRef(null); // Crée une référence pour stocker l'éditeur Quill

    const textContenu = article.content;
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
            quill.setContents([
                { insert: textContenu }
            ]);        }
    }, []);



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

    const [state, setState] = useState({
        title: '',
        category: 1,
        description: '',
        content: '',
        photo: null,
    });


    const InputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
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

    let user = localStorage.getItem('username');

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
        /*const dataJson = JSON.stringify({
            title: state.title,
            headline: state.description,
            content: content,
            categoryIds: state.category,
            image: state.photo
        });
        const init = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
            body: dataJson
        };
        console.log(init)
        fetch(`http://127.0.0.1:8080/api/articles/${id}`, init)
            .then((response) => {
                if(response.status === 200){
                    alert('Article modifié avec succès');
                    //let data = response.json();
                }
                else{
                    alert("Erreur, la modification de l'article n'a pas fonctionné")
                }
                return response.json();
            })
            .then(function (data) {
                navigate(`/categorie/transport/article/${id}`)
            })
            .catch(function (error) {
                console.log(error);
            });*/

    }
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