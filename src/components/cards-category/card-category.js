import styles from "./cardcategory.module.scss";
import {Link} from "react-router-dom";

function CardCategory(props){
    return (
        <div className={styles.cardcategory}>
            <div className={styles.ribbon}>
                <span>{props.category}</span>
            </div>
            <img src={props.thumb_article} alt="Image de la catégorie"/>
            {/* <h4>{props.title}</h4> 
            <p>{props.description}</p> 
            <legend className={styles.date}>{props.date_publication}</legend> */}
            <Link className={"btn btn-link"} to={`article/${props.articleId}`}>Découvrir les articles</Link>
        </div>
    );
}

export default CardCategory