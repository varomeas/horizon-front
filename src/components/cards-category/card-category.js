// Importation des dépendances nécessaires
import styles from "./cardcategory.module.scss";
import {Link} from "react-router-dom";

// Définition du composant CardCategory
function CardCategory(props){
    // URL du serveur
    const serverUrl = 'http://localhost:8080';
    // Construction de l'URL de l'image
    const imageUrl = `${serverUrl}${props.thumb_article}`;

    let image_couverture;
    // Si la propriété 'cat' est vraie, on utilise l'URL de l'image telle quelle
    if(props.cat){
        image_couverture = <img src={props.thumb_article} alt="Cover de la catégorie"/>
    }
    else {
        // Si une image de couverture est fournie, on utilise l'URL du serveur
        if(props.thumb_article){
            image_couverture = <img src={imageUrl} alt="Cover de la catégorie"/>
        }
        // Sinon, on utilise une image par défaut
        else {
            image_couverture = <img src={"/images/accueil1.jpg"} alt="Cover de la catégorie"/>
        }
    }

    // Formatage de la date de publication si elle est fournie
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

    // Rendu du composant
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

// Exportation du composant
export default CardCategory