import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { orderCards, filterCards, reset } from "../redux/actions/actions";

export default function Favorite({ onClose }) {
  const favorites = useSelector((state) => state.myFavorite);
  
  const dispatch = useDispatch();
  
  function handleOrder (e){
    e.preventDefault()
    const {name, value} = e.target
    dispatch(orderCards(value))
  };
  function handleFilter (e){
    e.preventDefault()
    const {name, value} = e.target
    dispatch(filterCards(value))
  };

  function resetBton (){
    dispatch(reset())
  }


  return (
    <div>
      <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>
          Select Order
        </option>
        <option value="A"> Ascendente</option>
        <option value="D"> Descendente</option>
      </select>
      <select  onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>
          Select gender
        </option>
        <option value="Male"> Male</option>
        <option value="Female"> Female</option>
        <option value="GenderLess"> GenderLess</option>
        <option value="Unknown"> Unknown</option>
      </select>
      <button onclick = {resetBton}>Reset</button>
      {favorites.map((character, index) => {
        return (
          <Card
            key={index}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
