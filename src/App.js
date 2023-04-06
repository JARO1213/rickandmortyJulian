import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import React, { useState } from "react";
import styles from "./components/CSS_Components/card.module.css";
import axios from 'axios';
import {Routes, Route } from 'react-router-dom'
import About from "./components/About";
import Detail from "./components/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

function onClose (id){
setCharacters((oldChars) => {
   return oldChars.filter((ch) => ch.id !== id) // esta linea filtra elementos por su id
});
}
  
  function onSearch(id) {
     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
           let existente = characters.find((ch) => ch.id === data.id); // este evita repetir personajes al buscarlo
           if(existente){
            alert("El personaje ya fue encontrado");
           } else  {
           setCharacters((oldChars) => [...oldChars, data]);
           } 
        } else {
           window.alert('¡No hay personajes con este ID!');
        }
     });
  }

  return (
    <div className="App">
      
      <span className={`${styles.span}`}>
        <h1 className={`${styles.Tittleh1}`}>Rick & Morty</h1>
        <h2>by: Julián R.</h2>
      </span>
     
      <div>
        <Nav onSearch={onSearch}/>
        <Routes>
         <Route path="/home" element={<Cards onClose ={onClose} characters={characters}/>}></Route>
         <Route path="/About" element={<About/>}></Route>
         <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
      </div>  
    </div>
  );
}

export default App;
