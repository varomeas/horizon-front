import { Link } from "react-router-dom"

import styles from "./header.module.scss";

function Menu(){
    return(
        <header>
            <div className={styles.logo}>
                <Link to="/"><img src="/logo.png" alt="logo" /></Link>
            </div>
            <ul className={styles.menu}>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/link2">Transport</Link></li>
                <li><Link to="/link3">Santé</Link></li>
                <li><Link to="/link4">Alimentation</Link></li>
                <li><Link to="/link5">Loisirs</Link></li>
                <li><Link to="/link6">Inter-génération</Link></li>
                <li><Link to="/link7">Autres</Link></li>
            </ul>
            <div className={styles.buttons}>
                <button className={"btn"}>Urgence</button>
                <button className={"btn"}>Accessibilité</button>
            </div>
        </header>
    )
}

export default Menu