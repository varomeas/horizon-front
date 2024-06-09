import {useParams} from "react-router-dom";
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carousel/carousel";
import CardCategory from "../../components/cards-category/card-category";
import styles from "./categories.module.scss";
import {useContext, useEffect, useState} from "react";
import SearchBar from "../../components/search-bar/search-bar";
import {FontSizeContext} from "../../assets/FontSizeContext";

const CategoryPage = () => {
    const {fontSize} = useContext(FontSizeContext);
    const {category} = useParams();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

      return (
          <>
            <Menu></Menu>
              <SearchBar></SearchBar>
            <Carousel></Carousel>
            <main style={{fontSize: fontSize}}>
                <h1>{category}</h1>
                <h2>Tous nos articles de la catégorie {category}</h2>
                {/*<div className={styles.articles}>
                    <CardCategory category={"transports"} title={"Les nouveaux trajets de la STS"} thumb_article={'/images/cat1.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Santé"} title={"Découvrez le CIUSS du Saguenay"} thumb_article={'/images/cat2.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                </div>*/}
                <div className={styles.articles}>
                    {articles.map((article) => (
                        <CardCategory key={article.id} articleId={article.id} category={article.category} title={article.title} thumb_article={article.thumb_article} date_publication={article.createdAt} description={article.description}></CardCategory>
                    ))}
                </div>
            </main>
            <Footer></Footer>
          </>

      );
}

export default CategoryPage;