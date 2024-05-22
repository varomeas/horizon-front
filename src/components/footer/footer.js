import { Link } from "react-router-dom"

import styles from "./footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return(
        <footer>
            <div>
                <div className={styles.logo}>
                    <Link to="/"><img src="/logo.png" alt="logo" /></Link>
                </div>
                <div className={styles.infos}>
                    <h3>Liens utiles</h3>
                    <p><a href={"https://ville.saguenay.ca"} target={"_blank"} rel={"noreferrer noopener"}>Site de la ville de Saguenay <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a> </p>
                    <p><a href={"https://www.quebec.ca/sante"} target={"_blank"} rel={"noreferrer noopener"}>Santé gouvernement Québec <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a> </p>
                    <p><a href={"https://rvsq.gouv.qc.ca/accueil/index.html"} target={"_blank"} rel={"noreferrer noopener"}>Rendez-vous santé Québec <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a> </p>
                    <p><a href={"https://carnetsante.gouv.qc.ca/portail"} target={"_blank"} rel={"noreferrer noopener"}>Carnet de santé Québec <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a> </p>
                </div>
                <ul className={styles.menu}>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/link2">Transport</Link></li>
                <li><Link to="/link3">Santé</Link></li>
                <li><Link to="/link4">Alimentation</Link></li>
                <li><Link to="/link5">Loisirs</Link></li>
                <li><Link to="/link6">Inter-génération</Link></li>
            </ul>
            </div>
            <p className={styles.copyright}>Copyright © 2024 UQAC. Tous droits réservés.</p>

        </footer>
    )
}

export default Footer