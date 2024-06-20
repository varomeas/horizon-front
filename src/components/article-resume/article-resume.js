import styles from "./article-resume.module.scss";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function ArticleResume(article) {
    const {id } = useParams();

    // const [article, setArticle] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:8080/api/articles/${id}`)
    //         .then(response => response.json())
    //         .then(data => setArticle(data))
    //         .catch(error => console.error('Erreur:', error));
    // }, [id]);

    if (!article) {
      return <div>Chargement...</div>;
    }

  return (
    <div className={styles.resume}>
      <h3>{article.category}</h3>
      <img src={article.imageUrl} alt="Image de l'article'"/>         
      <span className={styles.DateModif}>{article.updatedAt}</span>
      <h2>{article.title}</h2>
      <Link className={"btn btn-link"} to={`article/${article.articleId}`}>Voir l'article</Link>
    </div>
  );
}

export default ArticleResume;