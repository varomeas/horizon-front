import styles from "./searchbar.module.scss";
import {TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

function SearchBar() {

    const maxRusltats = 10;
    const searchRef = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/articles/')
            .then(response => response.json())
            .then(json => setData(json))

        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setInputText(''); // Réinitialise inputText si le clic a eu lieu en dehors de la barre de recherche
            }
        }

        // Ajout du gestionnaire d'événements de clic au document
        document.addEventListener('mousedown', handleClickOutside);

        // Supprission du gestionnaire d'événements de clic du document lorsque le composant est démonté
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [inputText, setInputText] = useState("");
    const handleInputChange = (event) => {
        let value = event.target.value;
        setInputText(value);
    };

  return (
      <div className={styles.search} ref={searchRef}>
          <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Rechercher un article"
          onChange={handleInputChange}
          className={styles.searchbar}
          />
          {inputText &&
              <ul className={styles.liste_prop}>
                {data.filter((val) => {return val.title.includes(inputText)})
                    .slice(0, maxRusltats)
                    .map((item) => (
                    <li key={item.id}>
                        <Link className={styles.lien_prop} to={`/categorie/transport/article/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
                  {data.filter((val) => {return val.title.includes(inputText)}).length === 0 && <li>Aucun résultat</li>}
              </ul>
          }
      </div>

  );
}

export default SearchBar;