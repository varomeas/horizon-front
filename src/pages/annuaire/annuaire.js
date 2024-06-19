import styles from "./annuaire.module.scss";
import CardNumber from "../../components/cards-number/CardNumber";
import Menu from "../../components/header/header";
import Footer from "../../components/footer/footer";
function Annuaire() {
  return (
    <>
        <Menu></Menu>
        <main>
            <h1>Annuaire</h1>
            <h2>Services pour la santé</h2>
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
                </ul>

        </main>
        <Footer></Footer>
    </>
  );
}

export default Annuaire;