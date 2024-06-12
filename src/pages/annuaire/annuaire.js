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
                <div className={styles.categories_numero}>
                    <CardNumber className={styles.full} numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                    <CardNumber className={styles.half} numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                    <CardNumber className={styles.half2} numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                </div>
            </section>
            <section className={styles.categories}>
                <h2>Services pour le transport </h2>
                <div className={styles.categories_numero}>
                    <CardNumber className={styles.full} numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                    <CardNumber className={styles.half} numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                    <CardNumber className={styles.half2} numero={"911"} titre={"Police - Ambulance"} description={"Lorem ipsum blablaaaaaaaaaaaaaaaaaa"} url_image={"images/thumb1.png"} adresse={"305 Rue St Vallier, Chicoutimi, QC G7H 5H6"}></CardNumber>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>
  );
}

export default Annuaire;