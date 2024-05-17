import { Link } from "react-router-dom"

import styles from "./header.module.scss";

function Menu(){
    return(
        <header>
            <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
            </div>
            <ul className={styles.menu}>
                <li><Link to="/link1">Accueil</Link></li>
                <li><Link to="/link2">Transport</Link></li>
                <li><Link to="/link3">Santé</Link></li>
                <li><Link to="/link4">Alimentation</Link></li>
                <li><Link to="/link5">Loisirs</Link></li>
                <li><Link to="/link6">Inter-génération</Link></li>
            </ul>
            <div className={styles.buttons}>
                <button>Urgence</button>
                <button>Mode accessibilité</button>
            </div>
        </header>
    )
}

export default Menu