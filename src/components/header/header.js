import { Link } from "react-router-dom"

import styles from "./header.module.scss";
import {useContext, useState} from "react";
import {FontSizeContext} from "../../assets/FontSizeContext";

// Import des images
import logo from "../../assets/logo.png";
import burgerIcon from "../../assets/icons/burger.svg";
import croixIcon from "../../assets/icons/croix.svg";
import loupeIcon from "../../assets/icons/loupe.svg";
import telephoneIcon from "../../assets/icons/telephone.svg";
import aaIcon from "../../assets/icons/aA.svg";

function Menu(){
    const {changeFontSize} = useContext(FontSizeContext);

    const [showMenu, setShowMenu] = useState(false);
    const [showMenuBurger, setShowMenuBurger] = useState(false);

    const handleAccessibilityClick = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    };

    const handleBurgerClick = () => {
        setShowMenuBurger(prevShowMenuBurger => !prevShowMenuBurger);
    };

    const handleFontSizeClick = (size) => {
        changeFontSize(size);
        setShowMenu(false);
    };

    return(
        <header>
            <div className={styles.logo}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <button className={styles.burger} onClick={handleBurgerClick}>
                <img src={burgerIcon} alt="Menu" />
            </button>
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
                <button className={"btn"}>
                    <Link to="/annuaire">Services d'urgence</Link>
                </button>
                <button className={"btn"} onClick={handleAccessibilityClick}>Accessibilité</button>
                {showMenu && (
                    <div className={styles.accessibilite_menu}>
                        <button className={"btn"} onClick={() => handleFontSizeClick('small')}>Petit</button>
                        <button className={"btn"} onClick={() => handleFontSizeClick('medium')}>Moyen</button>
                        <button className={"btn"} onClick={() => handleFontSizeClick('large')}>Grand</button>
                    </div>
                )}
            </div>
            <div className={styles.buttonsTel}>
            <button className={"btn"}>
                    <img src={loupeIcon} alt="Recherche" />
                </button>
                <button className={"btn"}>
                    <Link to="/annuaire">
                        <img src={telephoneIcon} alt="Services d'urgence" />
                    </Link>
                </button>
                <button className={"btn"} onClick={handleAccessibilityClick}>
                    <img src={aaIcon} alt="Grossir le texte" />
                </button>
                {showMenu && (
                    <div className={styles.accessibilite_menu}>
                        <button className={"btn"} onClick={() => handleFontSizeClick('small')}>Petit</button>
                        <button className={"btn"} onClick={() => handleFontSizeClick('medium')}>Moyen</button>
                        <button className={"btn"} onClick={() => handleFontSizeClick('large')}>Grand</button>
                    </div>
                )}
            </div>
            {showMenuBurger && (
                <div className={styles.menu_open}>
                    <button className={styles.burger} onClick={handleBurgerClick}>
                        <img src={croixIcon} alt="Fermer le menu" />
                    </button>
                    <ul className={styles.menu}>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/categorie/transport">Transport</Link></li>
                        <li><Link to="/categorie/sante">Santé</Link></li>
                        <li><Link to="/categorie/alimentation">Alimentation</Link></li>
                        <li><Link to="/categorie/loisirs">Loisirs</Link></li>
                        <li><Link to="/link6">Inter-génération</Link></li>
                        <li><Link to="/categorie/autres">Autres</Link></li>
                    </ul>
                    <div className={styles.logo} onClick={handleBurgerClick}>
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Menu