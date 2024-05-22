import styles from "./cardcategory.module.scss";

function CardCategory(){
    return (
        <div className={styles.cardcategory}>
            <div className={styles.ribbon}>
                <span>Transport</span>
            </div>
            <img src={"images/cat1.png"} alt="Image de la catégorie"/>
            <h4>Transport</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo odio. Nulla tellus elit, accumsan tincidunt urna ut, condimentum aliquet erat. Donec aliquam, libero sit amet molestie malesuada, sem tellus euismod mauris, in vulputate arcu sapien sed sapien.</p>
            <legend className={styles.date}>Le 10 main 2024</legend>
            <button className={"btn"}>Lire la suite</button>
        </div>
    );
}

export default CardCategory