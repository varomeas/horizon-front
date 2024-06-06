import './App.scss';
import Menu from "./components/header/header";
import Footer from "./components/footer/footer";
import {useContext, useEffect} from "react";
import CardNumber from "./components/cards-number/CardNumber";
import CardCategory from "./components/cards-category/card-category";
import Carousel from "./components/carousel/carousel";
import {FontSizeContext, FontSizeProvider} from "./assets/FontSizeContext";

function App() {
    const {fontSize} = useContext(FontSizeContext);
  return (
    <div className="App">
        <Menu ></Menu>
        <div className={"search-bar"}>

        </div>
        <Carousel></Carousel>
        <main>
            <section className={"numéros"}>
                <h2>Trouver facilement un numéro de téléphone</h2>
                <ul>
                    <li>
                        <CardNumber numero={"811"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                    </li>
                    <li>
                        <CardNumber numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"}></CardNumber>
                    </li>
                    <li>                   
                        <CardNumber numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"}></CardNumber>
                    </li>
                    <li>
                        <button className={"btn"}>
                            <a href="/annuaire">Voir l'annuaire complet</a>
                        </button>
                    </li>
                </ul>

            </section>
            <section className={"présentation"}>
                <h2>Qu'est-ce que Horizon Senior Saguenay?</h2>
                <div>
                    <p className={"text-présentation"} style={{fontSize: fontSize}}>Horizon Senior Saguenay est un organisme à but non lucratif qui a pour mission de faciliter l'accès aux services pour les personnes âgées de la région du Saguenay-Lac-Saint-Jean. Notre site web vous permet de trouver facilement les numéros de téléphone des services de santé, de transport, d'alimentation, de loisirs et bien plus encore.
                        </p>
                    <img src={"images/accueil1.jpg"} alt="Deux anciens qui se promènent"/>
                </div>

            </section>
            <section className={"catégories"}>
                <h2>Rechercher par catégories</h2>
                <ul>
                    <li>
                        <CardCategory category={"transports"} title={"Les nouveaux trajets de la STS"} thumb_article={'images/cat1.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    </li>
                    <li>
                        <CardCategory category={"Santé"} title={"Découvrez le CIUSS du Saguenay"} thumb_article={'images/cat2.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    </li>
                    <li>
                        <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    </li>
                    <li>
                        <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    </li>
                    <li>
                        <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    </li>
                    <li>
                        <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    </li>
                </ul>
            </section>

        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
