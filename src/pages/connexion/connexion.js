import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import styles from "./connexion.module.scss";
import {useNavigate} from "react-router-dom";

function Connexion(){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/admin');
        }
    }, [navigate]);

    const [infos, setInfos] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfos((props) => ({
            ...props,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        // TODO : modifier la route si necessaire et supp la ligne 41
        const dataJson = JSON.stringify({
            username: infos.username,
            password: infos.password
        });

        const init = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: dataJson
        };
        fetch("http://localhost:8080/api/auth/login", init)
            .then((response) => response.json())
            .then(function (data) {
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
        // navigate(`accueil`);
    };
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