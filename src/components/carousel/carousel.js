import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel_1(){
    return(
        <Carousel swipeable={true} showThumbs={false} useKeyboardArrows={true} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true}>
            <div>
                <img src={"/images/carousel1.jpg"} />
                <div className="legend"><p>Lisez notre nouvel article 1 </p><button className={"btn"}>Lire</button> </div>
            </div>
            <div>
                <img src={"/images/carousel1.jpg"} />
                <div className="legend"><p>Lisez notre nouvel article sur les services à domicile </p><button className={"btn"}>Lire</button> </div>
            </div>
            <div>
                <img src={"/images/carousel1.jpg"} />
                <div className="legend"><p>Lisez notre nouvel article 3 </p><button className={"btn"}>Lire</button> </div>
            </div>
        </Carousel>
    )
}

export default Carousel_1;