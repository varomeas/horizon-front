import { Link, useNavigate } from "react-router-dom";
import Menu from "../header/header";
import Footer from "../footer/footer";
import styles from "./404.module.scss";


export default function NotFound() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1)
    }
    return (
        <>
            <Menu></Menu>
            <main className={styles.notfound}>
                <h1>404</h1>
                <p>La page n'a pas été trouvée!</p>
                <button className={"btn"} onClick={handleBackClick}>Retour</button>
            </main>
            <Footer></Footer>
        </>
    )
}