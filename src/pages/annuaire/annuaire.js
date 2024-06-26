import styles from "./annuaire.module.scss";
import CardNumber from "../../components/cards-number/CardNumber";
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SearchBar from "../../components/search-bar/search-bar";
import {useContext} from "react";
import {FontSizeContext} from "../../assets/FontSizeContext";
function Annuaire() {
    const {fontSize} = useContext(FontSizeContext);
  return (
    <>
        <Menu></Menu>
        <SearchBar></SearchBar>
        <main style={{fontSize: fontSize}}>
            <h1>Annuaire</h1>
            <section className={styles.categories}>
              <h2>Services pour la santé</h2>
              <ul>
                      <li>
                          <CardNumber className={styles.full} numero={"911"} titre={"Police - Ambulance"} description={"Composez le 911 pour les urgences seulement pour être mis en relation avec les pompiers ou bien la police. Il doit être utilisé seulement pour les cas les plus graves. Composez le 811 pour un besoin non urgent."} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                      </li>
                      <li>
                          <CardNumber className={styles.full} numero={"811"} titre={"Info-Santé"} description={"Composez ce numéro pour être mis en relation avec un professionnel de santé qui saura vous aider pour vos problèmes de santé non urgent. C'est un numéro d'information si vous avez des questions sur votre santé. "} url_image={"images/thumb1.png"}></CardNumber>
                      </li>
                      <li>                   
                          <CardNumber className={styles.full} numero={"418 699-6030"} titre={"Jonquière Médic"} description={"Jonquière Médic est un service qui propose des rendez-vous médicaux à domicile ou bien un service de consultation pour vos problèmes de santé."} url_image={"images/thumb1.png"} adresse={"2890 Pl. Davis, Jonquière, QC G7S 5K4"}></CardNumber>
                      </li>
                      <li>                   
                          <CardNumber className={styles.full} numero={"800 463-5060"} titre={"Anti-poison"} description={"Appelez le centre anti-poison pour toute ingestion de produit chimique ou dangereux ou bien en cas d'intoxication alimentaire."} url_image={"images/thumb1.png"} adresse={"1270, chemin Sainte-Foy, Pavillon Jeffery Hale, 3e étage, Québec, G1S 2M4"}></CardNumber>
                      </li>
                       <li>                   
                          <CardNumber className={styles.full} numero={"866 277-3553"} titre={"Prévention suicide"} description={"Si vous ou un de vos proche à besoin d'aide émotionnel ou fait face à une crise suicidaire, appelez ce numéro pour obtenir quelqu'un pour vous aider."} url_image={"images/thumb1.png"}></CardNumber>
                      </li>
               </ul>
            </section>
            <section className={styles.categories}>
                <h2>Services pour le transport </h2>
                <ul>
                  <li>
                    <CardNumber className={styles.full} numero={"418 543-3868"} titre={"Taxis Unis Chicoutimi"} description={"Taxis Unis est un service de taxis situé sur la rue Racine à Chicoutimi et qui permet de faire des déplacements de grande distance. Taxis Unis propose un service adapté pour les personnes en difficulté."} url_image={"images/taxi.webp"} adresse={"55 Rue Racine E, Chicoutimi, QC G7J 1E5"}></CardNumber>
                  </li>
                  <li>
                      <CardNumber className={styles.full} numero={"418 545-3683"} titre={"Société de transport du Saguenay (STS)"} description={"La société du transport du Saguenay (STS) est le service d'autobus de la ville qui permet de se déplacer entre Jonquière, Chicoutimi et La Baie si vous n'avez pas de moyen de transport. Les bus déservent de nombreux arrêts dans les différents quartiers."} url_image={"images/bus.webp"} adresse={"1330 Rue Bersimis, Chicoutimi, QC G7K 1A5"}></CardNumber>
                  </li>
                  <li>
                        <CardNumber className={styles.full} numero={"418 543-6639"} titre={"Centre d'action bénévole de Chicoutimi"} description={"Les bénévoles du centre d'action peuvent vous transporter pour vos rendez-vous médicaux à Chicoutimi, Saint-Fulgurence et Ste-Rose-Du-Nord ainsi que les villes aux alentours. Il est aussi possible de se rendre à Québec ou Montréal."} url_image={"images/voiture.webp"} adresse={"605, rue St-Paul, bureau 100, Chicoutimi (Québec) G7J 3Z4"}></CardNumber>
                  </li>
            </section>

           {/* <section className={styles.categories}>
                <h2>Services pour la santé</h2>
                <div className={styles.categories_numero}>
                    <CardNumber className={styles.full} numero={"911"} titre={"Police - Ambulance"} description={"Composez le 911 pour les urgences seulement pour être mis en relation avec les pompiers ou bien la police. Il doit être utilisé seulement pour les cas les plus graves. Composez le 811 pour un besoin non urgent."} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                    <CardNumber className={styles.full} numero={"811"} titre={"Info-Santé"} description={"Composez ce numéro pour être mis en relation avec un professionnel de santé qui saura vous aider pour vos problèmes de santé non urgent. C'est un numéro d'information si vous avez des questions sur votre santé. "} url_image={"images/thumb1.png"}></CardNumber>
                    <CardNumber className={styles.full} numero={"418 699-6030"} titre={"Jonquière Médic"} description={"Jonquière Médic est un service qui propose des rendez-vous médicaux à domicile ou bien un service de consultation pour vos problèmes de santé."} url_image={"images/thumb1.png"} adresse={"2890 Pl. Davis, Jonquière, QC G7S 5K4"}></CardNumber>
                    <CardNumber className={styles.full} numero={"800 463-5060"} titre={"Anti-poison"} description={"Appelez le centre anti-poison pour toute ingestion de produit chimique ou dangereux ou bien en cas d'intoxication alimentaire."} url_image={"images/thumb1.png"} adresse={"1270, chemin Sainte-Foy, Pavillon Jeffery Hale, 3e étage, Québec, G1S 2M4"}></CardNumber>
                    <CardNumber className={styles.full} numero={"866 277-3553"} titre={"Prévention suicide"} description={"Si vous ou un de vos proche à besoin d'aide émotionnel ou fait face à une crise suicidaire, appelez ce numéro pour obtenir quelqu'un pour vous aider."} url_image={"images/thumb1.png"}></CardNumber>
                </div>
            </section>
            <section className={styles.categories}>
                <h2>Services pour le transport </h2>
                <div className={styles.categories_numero}>
                    <CardNumber className={styles.full} numero={"418 543-3868"} titre={"Taxis Unis Chicoutimi"} description={"Taxis Unis est un service de taxis situé sur la rue Racine à Chicoutimi et qui permet de faire des déplacements de grande distance. Taxis Unis propose un service adapté pour les personnes en difficulté."} url_image={"images/taxi.webp"} adresse={"55 Rue Racine E, Chicoutimi, QC G7J 1E5"}></CardNumber>
                    <CardNumber className={styles.full} numero={"418 545-3683"} titre={"Société de transport du Saguenay (STS)"} description={"La société du transport du Saguenay (STS) est le service d'autobus de la ville qui permet de se déplacer entre Jonquière, Chicoutimi et La Baie si vous n'avez pas de moyen de transport. Les bus déservent de nombreux arrêts dans les différents quartiers."} url_image={"images/bus.webp"} adresse={"1330 Rue Bersimis, Chicoutimi, QC G7K 1A5"}></CardNumber>
                    <CardNumber className={styles.full} numero={"418 543-6639"} titre={"Centre d'action bénévole de Chicoutimi"} description={"Les bénévoles du centre d'action peuvent vous transporter pour vos rendez-vous médicaux à Chicoutimi, Saint-Fulgurence et Ste-Rose-Du-Nord ainsi que les villes aux alentours. Il est aussi possible de se rendre à Québec ou Montréal."} url_image={"images/voiture.webp"} adresse={"605, rue St-Paul, bureau 100, Chicoutimi (Québec) G7J 3Z4"}></CardNumber>
                </div>
            </section>*/}
        </main>
        <Footer></Footer>
    </>
  );
}

export default Annuaire;