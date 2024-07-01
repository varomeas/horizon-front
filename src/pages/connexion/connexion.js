// Importation des dépendances nécessaires
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import styles from "./connexion.module.scss";
import {useNavigate} from "react-router-dom";

// Définition du composant Connexion
function Connexion(){
    // Utilisation du hook useNavigate pour la navigation
    const navigate = useNavigate();

    // Vérification que l'utilisateur est connecté lors du chargement du composant
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/admin');
        }
    }, [navigate]);

    // État pour stocker les informations de connexion
    const [infos, setInfos] = useState({
        username: "",
        password: "",
    });

    // Gestionnaire d'événements pour les changements de valeur des champs du formulaire
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfos((props) => ({
            ...props,
            [name]: value,
        }));
    };

    // Gestionnaire d'événements pour la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();

        // Conversion des informations de connexion en JSON
        const dataJson = JSON.stringify({
            username: infos.username,
            password: infos.password
        });

        // Configuration de la requête HTTP
        const init = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: dataJson
        };

        // Envoi de la requête HTTP
        fetch("http://localhost:8080/api/auth/login", init)
            .then((response) => response.json())
            .then(function (data) {
                // Si un token est reçu, stocke le token et le nom d'utilisateur dans le local storage
                // et redirige vers la page d'administration
                if(data.token){
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("username", data.client.username);
                    navigate(`/admin`);
                    alert('La connexion est un succès!');
                }
                else{
                    alert("Erreur, les informations de connexion ne sont pas correctes!")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // Rendu du composant
    return (
        <>
            <Menu></Menu>
            <main className={styles.main}>
                <h1>Connexion à un compte administrateur</h1>
                <fieldset className={styles.formulaire}>
                    <h3>Connexion</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className={styles.input}
                            label="Nom d'utilisateur"
                            variant="outlined"
                            name="username"
                            type="text"
                            onChange={handleInputChange}
                        />
                        <TextField
                            className={styles.input}
                            label="Mot de passe"
                            variant="outlined"
                            name="password"
                            type="password"
                            onChange={handleInputChange}
                        />
                        <Button type="submit" variant="contained">Se connecter</Button>
                    </form>
                </fieldset>

            </main>
            <Footer></Footer>
        </>
    )
}

export default Connexion;