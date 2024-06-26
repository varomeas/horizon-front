import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SearchBar from "../../components/search-bar/search-bar";

function Intergeneration(){
    return (
        <>
            <Menu></Menu>
            <SearchBar></SearchBar>
            <main>
                <h1>Intergénération</h1>
                <section>
                    <h2>L'intergénération au Saguenay</h2>
                    <p>Le Saguenay-Lac-Saint-Jean est une région où l'intergénération est très présente. Les jeunes et les moins jeunes se côtoient dans plusieurs activités et événements. L'intergénération est un moyen de briser l'isolement et de favoriser les échanges entre les générations. C'est une richesse pour la région et pour ses habitants.</p>
                    <p>Les activités intergénérationelles proposées au Saguenay :</p>
                    <ul>
                        <li>Cohabitation Saguenay : permet de rejoindre une habitation pour une période plus ou moins longue avec des personnes de différentes générations.</li>
                        <li>RE/MAX Québec : propose de devenir propriétaire d'une maison intergénérationnnelle pour partager une expérience de vie unique.</li>
                        <li>Intergénération Québec est un organisme oeuvrant dans tout le Québec pour favoriser le rapprochement entre les différentes générations dans le but de créer un environnement inclusif, solidaire et très ouvert sur les différents questionnements auxquels fait face chaque génération.</li>
                    </ul>
                    <img/>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Intergeneration