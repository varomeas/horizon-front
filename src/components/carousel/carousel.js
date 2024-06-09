import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Carousel_1(){
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/articles/recent')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

    return(
        <Carousel swipeable={true} showThumbs={false} useKeyboardArrows={true} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true}>
            {articles.map((article) => (
                <div key={article.id}>
                    <img src={"/images/carousel1.jpg"} />
                    <div className="legend"><p>{article.title}</p><Link to={`/categorie/transport/article/${article.id}`} className={"btn btn-link"}>Lire</Link></div>
                </div>
            ))}
        </Carousel>
    )
}

export default Carousel_1;