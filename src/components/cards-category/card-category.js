import styles from "./cardcategory.module.scss";
import {Link} from "react-router-dom";
import {TRUE} from "sass";

function CardCategory(props){
    const serverUrl = 'http://localhost:8080'; // Remplacez par l'URL de votre serveur
    const imageUrl = `${serverUrl}${props.thumb_article}`;

    let image_couverture;
    if(props.cat){
        image_couverture = <img src={props.thumb_article} alt="Cover de la catégorie"/>
    }
    else {

        if(props.thumb_article){
            image_couverture = <img src={imageUrl} alt="Cover de la catégorie"/>
        }
        else {
            image_couverture = <img src={"/images/accueil1.jpg"} alt="Cover de la catégorie"/>
        }
    }

    let formattedDate;
    if (props.date_publication) {
        const date = new Date(`${props.date_publication}`);
        formattedDate = date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }


    return (
        <div className={styles.cardcategory}>
            <div className={styles.ribbon}>
                <span>{props.category}</span>
            </div>
            <div className={styles.thumb}>
                {image_couverture}
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            {formattedDate && <legend className={styles.date}>Publié le : {formattedDate}</legend>}
            <Link className={"btn btn-link"} to={props.link}>Lire la suite</Link>
        </div>
    );
}

export default CardCategory