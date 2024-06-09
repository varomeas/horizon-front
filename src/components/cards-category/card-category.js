import styles from "./cardcategory.module.scss";
import {Link} from "react-router-dom";

function CardCategory(props){
    const serverUrl = 'http://localhost:8080'; // Remplacez par l'URL de votre serveur
    const imageUrl = `${serverUrl}${props.thumb_article}`;
    return (
        <div className={styles.cardcategory}>
            <div className={styles.ribbon}>
                <span>{props.category}</span>
            </div>
            <img src={imageUrl} alt="Image de la catégorie"/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <legend className={styles.date}>{props.date_publication}</legend>
            <Link className={"btn btn-link"} to={`article/${props.articleId}`}>Lire la suite</Link>
        </div>
    );
}

export default CardCategory