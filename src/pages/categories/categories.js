import {useParams} from "react-router-dom";
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carousel/carousel";
import CardCategory from "../../components/cards-category/card-category";
import styles from "./categories.module.scss";
import {useContext, useEffect, useState} from "react";
import SearchBar from "../../components/search-bar/search-bar";
import {FontSizeContext} from "../../assets/FontSizeContext";
import axios from "axios";

const CategoryPage = () => {
    const {fontSize} = useContext(FontSizeContext);
    const {categoryName} = useParams();

    const [articles, setArticles] = useState([]);

    const [category, setCategory] = useState([]);

    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:8080/api/',
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    useEffect(() => {
        axiosInstance.get(`/categories/nom/${categoryName}`)
            .then(response => {
                console.log(response.data);
                setCategory(response.data);
                return response.data.id; // Retourne l'ID de la catégorie pour la prochaine requête
            })
            .then(categoryId => {
                // Utilise l'ID de la catégorie pour récupérer les articles de cette catégorie
                return axiosInstance.get(`/categories/${categoryId}/articles`);
            })
            .then(response => {
                console.log(response.data);
                setArticles(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryName]);
   /* useEffect(() => {
        fetch('http://localhost:8080/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Erreur:', error));
    }, []);*/

    for (let i = 0; i < articles.length; i++) {

    }

      return (
          <>
            <Menu></Menu>
              <SearchBar></SearchBar>
            <Carousel></Carousel>
            <main style={{fontSize: fontSize}} className={styles.main}>
                <div className={styles.entete}>
                    <h1>{categoryName}</h1>
                    <p>{category.description}</p>
                </div>
                <h2>Tous nos articles de la catégorie {categoryName}</h2>
                <div className={styles.articles}>
                    {articles.map((article) => (
                        <CardCategory key={article.id} articleId={article.id} category={category.name} title={article.title} thumb_article={article.imageUrl} date_publication={article.createdAt} description={article.headline} link={`article/${article.id}`}></CardCategory>
                    ))}
                </div>
            </main>
            <Footer></Footer>
          </>

      );
}

export default CategoryPage;