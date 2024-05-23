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
                <li><Link to="/categorie/transport">Transport</Link></li>
                <li><Link to="/categorie/sante">Santé</Link></li>
                <li><Link to="/categorie/alimentation">Alimentation</Link></li>
                <li><Link to="/categorie/loisirs">Loisirs</Link></li>
                <li><Link to="/link6">Inter-génération</Link></li>
                <li><Link to="/categorie/autres">Autres</Link></li>
            </ul>
            <div className={styles.buttons}>
                <button className={"btn"}>Urgence</button>
                <button className={"btn"}>Accessibilité</button>
            </div>
        </header>
    )
}

export default Menu