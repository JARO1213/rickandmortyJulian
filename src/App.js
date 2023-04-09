import "./App.css";
import { useLocation } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import React, { useState, useEffect } from "react";
import styles from "./components/CSS_Components/card.module.css";
import axios from "axios";
import { Routes, Route, useNavigate} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Forms from "./components/Form";
import Favorite from "./components/Favorite";

 
function App() {
  const [characters, setCharacters] = useState([]);
 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'unaPassword';
  var location = useLocation();
  console.log("este es ---->", location)
   
  function login(inputs) { // Crea una función llamada "login" que reciba por parámetro "userData". Esta función tiene que preguntar si el email y password que declaraste más arriba son iguales a los que les está llegando por parámetro. En caso afirmativo, el estado local access ahora será true. Importa el hook "useNavigate" de react-router-dom y haremos que nos redirija a /home si la información es correcta.
     if (inputs.password === PASSWORD && inputs.email === EMAIL) {
        setAccess(true);
        navigate('/home');
       }
  }
    
  useEffect(() => {
     !access && navigate('/');
  }, [access]);

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id); // esta linea filtra elementos por su id
    });
  }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let existente = characters.find((ch) => ch.id === data.id); // este evita repetir personajes al buscarlo
          if (existente) {
            alert("El personaje ya fue encontrado");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

   

  return (
    <div className="App">
      <span className={`${styles.span}`}>
        <h1 className={`${styles.Tittleh1}`}>Rick & Morty</h1>
        <h2>by: Julián R.</h2>
      </span>

      <div>
        {location.pathname === "/"? null :  <Nav onSearch={onSearch} />}
        <Routes>
          <Route path="/" element={<Forms login={login}/>}></Route>
          <Route
            path="/home"
            element={<Cards onClose={onClose} characters={characters} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Favorite" element={<Favorite onClose={onClose} />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
       
      </div>
    </div>
  );
}

export default App;
