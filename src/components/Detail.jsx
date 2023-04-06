import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from './CSS_Components/card.module.css';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={ character.image } alt= {character.name} className = {`${styles.imgStyle}`} />
      <div className={`${styles.borderdetail}`}>
         <h2 className = {`${styles.subtittleDetail}`}>Status = {character.status} </h2>
         <h2 className = {`${styles.subtittleDetail}`}>Species = {character.species}</h2>
         <h2 className = {`${styles.subtittleDetail}`}>Gender = {character.gender}</h2>
         <h2 className = {`${styles.subtittleDetail}`}>Origin = {character.origin?.name}</h2>
    </div>
    </div>
  );
}
