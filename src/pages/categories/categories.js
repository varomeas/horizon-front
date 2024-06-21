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
                setCategory(response.data)
            })
            .catch(error => {
                console.error(error);
            });

        axiosInstance.get(`/categories/${category.id}/articles`)
            .then(response => {
                console.log(response.data);
                setArticles(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryName, category.id]);

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
            <main style={{fontSize: fontSize}}>
                <div className={styles.entete}>
                    <h1>{category.name}</h1>
                    <p>{category.description}</p>
                </div>
                <h2>Tous nos articles de la catégorie {categoryName}</h2>
                <div className={styles.articles}>
                    {articles.map((article) => (
                        <CardCategory key={article.id} articleId={article.id} category={category.name} title={article.title} thumb_article={article.imageUrl} date_publication={article.createdAt} description={article.headline}></CardCategory>
                    ))}
                </div>
            </main>
            <Footer></Footer>
          </>

      );
}

export default CategoryPage;