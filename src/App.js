import './App.scss';
import Menu from "./components/header/header";
import Footer from "./components/footer/footer";
import {useContext, useEffect} from "react";
import CardNumber from "./components/cards-number/CardNumber";
import CardCategory from "./components/cards-category/card-category";
import Carousel from "./components/carousel/carousel";
import {FontSizeContext, FontSizeProvider} from "./assets/FontSizeContext";
import {Link} from "react-router-dom";
import SearchBar from "./components/search-bar/search-bar";


function App() {
    const {fontSize} = useContext(FontSizeContext);
  return (
    <div className="App">
        <Menu ></Menu>
        <SearchBar></SearchBar>
        <Carousel></Carousel>
        <main style={{fontSize: fontSize}}>
            <section className={"numéros"}>
                <h2>Trouver facilement un numéro de téléphone</h2>
                <div className={"numéros_accueil"}>
                    <CardNumber className={"card"} numero={"911"} titre={"Police - Ambulance"} description={"Composez le 911 pour les urgences seulement pour être mis en relation avec les pompiers ou bien la police. Il doit être utilisé seulement pour les cas les plus graves. Composez le 811 pour un besoin non urgent."} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                    <CardNumber className={"card"} numero={"811"} titre={"Info-Santé"} description={"Composez ce numéro pour être mis en relation avec un professionnel de santé qui saura vous aider pour vos problèmes de santé non urgent. C'est un numéro d'information si vous avez des questions sur votre santé. "} url_image={"images/thumb1.png"}></CardNumber>
                    <CardNumber className={"card"} numero={"800 463-5060"} titre={"Anti-poison"} description={"Appelez le centre anti-poison pour toute ingestion de produit chimique ou dangereux ou bien en cas d'intoxication alimentaire."} url_image={"images/thumb1.png"} adresse={"1270, chemin Sainte-Foy, Pavillon Jeffery Hale, 3e étage, Québec, G1S 2M4"}></CardNumber>
                    <Link to={"/annuaire"} className={"btn btn-link lien_annuaire"}>Voir la page annuaire</Link>
                </div>

            </section>
            <section className={"présentation"}>
                <h2>Qu'est-ce que Horizon Senior Saguenay?</h2>
                <div >
                    <p className={"text-présentation"}>Horizon Senior Saguenay est un organisme à but non lucratif qui a pour mission de faciliter l'accès aux services pour les personnes âgées de la région du Saguenay-Lac-Saint-Jean. Notre site web vous permet de trouver facilement les numéros de téléphone des services de santé, de transport, d'alimentation, de loisirs et bien plus encore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien. Cras varius mauris non scelerisque hendrerit. Mauris nec hendrerit purus, et dictum leo. Ut quis rutrum sapien, id venenatis eros. Sed ipsum purus, tempus non massa quis, convallis maximus lectus.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien.</p>
                    <img src={"images/accueil1.jpg"} alt="Deux anciens qui se promènent"/>
                </div>

            </section>
            <section className={"catégories"}>
                <h2>Rechercher par catégories</h2>
                <div>
                    <CardCategory category={"transports"} title={"Les nouveaux trajets de la STS"} thumb_article={'images/cat1.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Santé"} title={"Découvrez le CIUSS du Saguenay"} thumb_article={'images/cat2.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                    <CardCategory category={"Alimentation"} title={"Les épiceries les moins chères du coin"} thumb_article={'images/cat3.png'} date_publication={"Le 10 mai 2024"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien."}></CardCategory>
                </div>
            </section>

        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
