import styles from "./cardnumber.module.scss";

function CardNumber(props){

    const callNumber = (numero) => {
        const url = `tel:${numero}`;
        window.open(url, '_blank');
    }
    const openMap = (adresse) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresse)}`;
        window.open(url);
    }
    return(
        <div className={styles.card}>
            <div className={styles.thumb}>
                <img src={props.url_image} alt={"Plouf"}/>
            </div>
            <div className={styles.infos}>
                <h3><strong>{props.numero}</strong> - {props.titre}</h3>
                <p>{props.description}</p>

                {props.adresse ? <p>Adresse : <strong>{props.adresse}</strong></p> : null}
                <div className={styles.action}>
                    <button className={"btn"} onClick={() => callNumber(props.numero)}>Appeler</button>
                    {props.adresse ? <button className={"btn"} onClick={() => openMap(props.adresse)}>Itinéraire</button> : null}
                </div>
            </div>
        </div>
    )
}

export default CardNumber