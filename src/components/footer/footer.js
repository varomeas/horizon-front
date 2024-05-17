import { Link } from "react-router-dom"

import styles from "./footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer(){
    return(
        <footer>
            <div>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className={styles.infos}>
                    Liens utiles
                </div>
                <ul className={styles.menu}>
                <li><Link to="/link1">Accueil</Link></li>
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