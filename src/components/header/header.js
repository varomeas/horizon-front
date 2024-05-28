import { Link } from "react-router-dom"

import styles from "./header.module.scss";
import {useContext, useState} from "react";
import {FontSizeContext} from "../../assets/FontSizeContext";

function Menu(){
    const {changeFontSize} = useContext(FontSizeContext);

    const [showMenu, setShowMenu] = useState(false);

    const handleAccessibilityClick = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    };

    const handleFontSizeClick = (size) => {
        changeFontSize(size);
        setShowMenu(false);
    };

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
                <button className={"btn"} onClick={handleAccessibilityClick}>Accessibilité</button>
                {showMenu && (
                    <div className={styles.accessibilite_menu}>
                        <button className={"btn"} onClick={() => handleFontSizeClick('small')}>Petit</button>
                        <button className={"btn"} onClick={() => handleFontSizeClick('medium')}>Moyen</button>
                        <button className={"btn"} onClick={() => handleFontSizeClick('large')}>Grand</button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Menu