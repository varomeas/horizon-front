import {useParams} from "react-router-dom";
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carousel/carousel";
import ArticleResume from "../../components/article-resume/article-resume";
import styles from "./categories.module.scss";
import {useEffect, useState} from "react";

const CategoryPage = () => {
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
            <Carousel></Carousel>
            <main>
                <h1>{category}</h1>
                <h2>Tous nos articles de la catégorie {category}</h2>
                <ul className={styles.articles}>
                    <li>
                        <ArticleResume category={"transports"} title={"Les nouveaux trajets de la STS"} imageUrl={'/images/cat1.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></ArticleResume>
                    </li>
                    <li>   
                        <ArticleResume category={"Santé"} title={"Découvrez le CIUSS du Saguenay"} imageUrl={'/images/cat2.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></ArticleResume>
                    </li>
                    <li> 
                        <ArticleResume category={"Alimentation"} title={"Les épiceries les moins chères du coin"} imageUrl={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></ArticleResume>
                    </li>
                    <li> 
                        <ArticleResume category={"Alimentation"} title={"Les épiceries les moins chères du coin"} imageUrl={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></ArticleResume>
                    </li>
                    <li>   
                        <ArticleResume category={"Alimentation"} title={"Les épiceries les moins chères du coin"} imageUrl={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></ArticleResume>
                    </li>
                    <li>     
                        <ArticleResume category={"Alimentation"} title={"Les épiceries les moins chères du coin"} imageUrl={'/images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></ArticleResume>
                    </li>
                </ul>
                {/* <ul className={styles.articles}>
                    {articles.map((article) => (
                        <li>
                           <ArticleResume key={article.id} articleId={article.id} category={article.category} title={article.title} imageUrl={article.imageUrl} date_publication={article.createdAt} description={article.description}></ArticleResume>
                        </li>
                    ))}
                </ul> */}
            </main>
            <Footer></Footer>
          </>

      );
}

export default CategoryPage;