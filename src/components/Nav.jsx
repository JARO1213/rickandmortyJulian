import  React from "react";
import styles from './CSS_Components/card.module.css'
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav ({onSearch}) {

   return (     
    <div className= {`${styles.nav}`} > 
       <Link to ="/About">About</Link>
       <br></br>         
       <Link to ="/Home">Home</Link>
       <br></br>         
       <Link to ="/Favorite">Favorite</Link>
       <SearchBar onSearch={onSearch}/>               
     </div> 
    )    
    }

export default Nav;