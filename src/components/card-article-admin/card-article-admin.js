import styles from "./card-article-admin.module.scss";
import {Link} from "react-router-dom";
import {faArrowUpRightFromSquare, faEye, faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function AdminArticle(props){
    const handleDelete = (event) => {
        event.preventDefault();
        props.onDelete(props.id);
    };

    return (
        <div className={styles.card_article}>
            <h4>{props.title}</h4>
            <div className={styles.ribbon}>
                <span>{props.category}</span>
            </div>
            <div className={styles.contenu}>
                <p>{props.description}</p>
                {/*<legend className={styles.date}>{props.date_publication}</legend>*/}
                <div className={styles.actions}>
                    <Link className={styles.iconAction} to={`article/${props.id}`}><FontAwesomeIcon icon={faEye} size={"xl"}/></Link>
                    <Link className={styles.iconAction} to={`edit/${props.id}`}><FontAwesomeIcon icon={faPen} size={"xl"}/></Link>
                    <a className={styles.iconAction} onClick={handleDelete} href={"#"}><FontAwesomeIcon icon={faTrashCan} style={{color: "#e32400",}} size={"xl"}/></a>
                </div>
            </div>

        </div>
    );
}

export default AdminArticle;