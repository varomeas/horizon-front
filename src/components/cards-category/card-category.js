import styles from "./cardcategory.module.scss";
import {Link} from "react-router-dom";

function CardCategory(props){
    const serverUrl = 'http://localhost:8080'; // Remplacez par l'URL de votre serveur
    const imageUrl = `${serverUrl}${props.thumb_article}`;

    let image_couverture;
    if(props.thumb_article){
        image_couverture = <img src={imageUrl} alt="Cover de la catégorie"/>
    }
    else {
        image_couverture = <img src={"/images/accueil1.jpg"} alt="Cover de la catégorie"/>
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
            <legend className={styles.date}>{props.date_publication}</legend>
            <Link className={"btn btn-link"} to={`article/${props.articleId}`}>Lire la suite</Link>
        </div>
    );
}

export default CardCategory