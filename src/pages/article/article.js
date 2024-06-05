import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./article.module.scss";
import CardCategory from "../../components/cards-category/card-category";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import SearchBar from "../../components/search-bar/search-bar";

function Article() {
    const {id } = useParams();

    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/articles/${id}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Erreur:', error));
    }, [id]);

    if (!article) {
        return <div>Chargement...</div>;
    }

  return (
    <>
        <Menu></Menu>
        <SearchBar></SearchBar>
        <img src={"/images/carousel1.jpg"} alt="Image de la catégorie" width={"100%"}/>
        <main>
            <div className={styles.enTete}>
                <h1>{article.title}</h1>
                <span className={styles.DateModif}>{article.updatedAt}</span>
            </div>
            <div dangerouslySetInnerHTML={{__html: article.content}} className={styles.contenu}>
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Tincidunt nunc pulvinar sapien et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Egestas diam in arcu cursus euismod quis. Accumsan sit amet nulla facilisi. Velit dignissim sodales ut eu. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Lobortis scelerisque fermentum dui faucibus.

                    Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Scelerisque eu ultrices vitae auctor. Consectetur lorem donec massa sapien faucibus et molestie. Mattis enim ut tellus elementum sagittis vitae et leo duis. Gravida cum sociis natoque penatibus et magnis dis. Tempus egestas sed sed risus pretium quam. Et sollicitudin ac orci phasellus egestas tellus. Egestas integer eget aliquet nibh praesent tristique magna. Amet risus nullam eget felis eget nunc lobortis. Ornare aenean euismod elementum nisi quis. Ac felis donec et odio pellentesque. Mi eget mauris pharetra et ultrices neque. Sit amet est placerat in egestas. Mattis vulputate enim nulla aliquet porttitor.

                    Volutpat est velit egestas dui id. Ultrices in iaculis nunc sed augue lacus viverra vitae. Morbi tristique senectus et netus et malesuada fames ac. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. At in tellus integer feugiat scelerisque varius. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Nulla facilisi cras fermentum odio eu. Elementum eu facilisis sed odio morbi quis commodo odio. Convallis a cras semper auctor neque vitae tempus. Enim diam vulputate ut pharetra. Quis blandit turpis cursus in. Ultricies integer quis auctor elit sed vulputate mi sit.<br/><br/>

                    <img src={"/images/accueil1.jpg"} alt="Image de la catégorie"/>

                    <br/><br/>

                    Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Iaculis at erat pellentesque adipiscing commodo. Elit sed vulputate mi sit amet mauris. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet purus gravida quis blandit turpis cursus. Leo in vitae turpis massa sed. Rhoncus urna neque viverra justo nec. Massa eget egestas purus viverra accumsan. Tristique nulla aliquet enim tortor.

                    Nunc mi ipsum faucibus vitae. Amet consectetur adipiscing elit duis tristique. Tellus integer feugiat scelerisque varius morbi. Sed viverra ipsum nunc aliquet bibendum. Tempus imperdiet nulla malesuada pellentesque elit. Non arcu risus quis varius quam quisque id diam. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Nunc vel risus commodo viverra maecenas accumsan lacus. Tincidunt praesent semper feugiat nibh sed pulvinar. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Id diam maecenas ultricies mi. Faucibus turpis in eu mi bibendum. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Sapien faucibus et molestie ac feugiat. Scelerisque viverra mauris in aliquam sem fringilla ut. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
                    </p>*/}

            </div>
            <div className={styles.similaires}>
                <h2>Les articles similaires</h2>
                <div>
                    <CardCategory category={"transports"} title={"Les nouveaux trajets de la STS"} thumb_article={'/images/cat1.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"transports"} title={"Les nouveaux trajets de la STS"} thumb_article={'/images/cat1.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"transports"} title={"Les nouveaux trajets de la STS"} thumb_article={'/images/cat1.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                </div>

            </div>

        </main>

        <Footer></Footer>
    </>
  );
}

export default Article;