// Importation des dépendances nécessaires
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./article.module.scss";
import CardCategory from "../../components/cards-category/card-category";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import SearchBar from "../../components/search-bar/search-bar";
import {FontSizeContext} from "../../assets/FontSizeContext";

// Définition du composant Article
function Article() {
    // Utilisation du contexte pour obtenir la taille de la police
    const {fontSize} = useContext(FontSizeContext);
    // Récupération des paramètres d'URL
    const {id } = useParams();
    const {category } = useParams();

    // États pour stocker l'article et les articles similaires
    const [article, setArticle] = useState([]);
    const [similarArticles, setSimilarArticles] = useState([]);

    // Récupération de l'article et des articles similaires lors du chargement du composant
    useEffect(() => {
        fetch(`http://localhost:8080/api/articles/${id}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Erreur:', error));

        fetch(`http://localhost:8080/api/categories/${1}/articles`)
            .then(response => response.json())
            .then(similarData => {
                // Filtrer l'article actuel des articles similaires
                const filteredSimilarArticles = similarData.filter(similarArticle => similarArticle.id !== article.id);
                setSimilarArticles(filteredSimilarArticles);
            })
            .catch(error => console.error('Erreur:', error));
    }, [article.id, id]);

    // Si l'article n'est pas encore chargé, afficher un message de chargement
    if (!article) {
        return <div>Chargement...</div>;
    }

    // Construction de l'URL de l'image de couverture
    let image_couverture;
    if(article.imageUrl){
        image_couverture = <img src={`http://localhost:8080${article.imageUrl}`} alt="Image de la catégorie" width={"100%"}/>
    }
    else {
        image_couverture = <img src={"/images/accueil1.jpg"} alt="Cover de la catégorie"/>
    }

    // Formatage de la date de mise à jour
    const date = new Date(`${article.updatedAt}`);
    const formattedDate = date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Rendu du composant
    return (
        <>
            <Menu></Menu>
            <SearchBar></SearchBar>
            <div className={styles.image_couverture}>
                {image_couverture}
            </div>

            <main style={{fontSize: fontSize}}>
                <div className={styles.enTete}>
                    <h1>{article.title}</h1>
                    <span className={styles.DateModif}>Dernière modification : {formattedDate}</span><br/>
                    <span className={styles.DateModif}>Ecrit par : {article.author}</span>
                </div>
                <div dangerouslySetInnerHTML={{__html: article.content}} className={styles.contenu}>
                </div>
                <div className={styles.similaires}>
                    <h2>Les articles similaires</h2>
                    <div>
                        {similarArticles.slice(0, 3).map((similarArticle) => (
                            <CardCategory
                                key={similarArticle.id}
                                category={category}
                                title={similarArticle.title}
                                thumb_article={similarArticle.imageUrl}
                                date_publication={similarArticle.createdAt}
                                description={similarArticle.headline}
                                link={`/categorie/${category}/article/${similarArticle.id}`}
                            />
                        ))}
                    </div>

                </div>

            </main>

            <Footer></Footer>
        </>
    );
}

export default Article;