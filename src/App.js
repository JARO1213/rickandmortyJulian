import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import NavBar from './components/Nav.jsx';
import React, {useState} from 'react';
import styles from './components/CSS_Components/card.module.css';


function App() {
   
const [localState, setState] = useState(
   {
   characters: [],
   })

   function onSearch(characterID) {
   return setState([{
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   }])
   }

   return (
      <div className='App'>
        <span className= {`${styles.span}`}>
         <h1 className={`${styles.Tittleh1}`}>Rick & Morty</h1>
         <h2>by: Julián R.</h2>
            </span>
          <br></br>
         <NavBar onSearch={onSearch} />
         <br></br>
         <div className={`${styles.container}`}>
         <Cards characters={localState.characters} /> 
         </div>
         <br></br>
    </div>
   );
}

export default App;
