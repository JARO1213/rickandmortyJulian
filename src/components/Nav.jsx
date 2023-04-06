import  React from "react";
import styles from './CSS_Components/card.module.css'
import SearchBar from "./SearchBar";

function Nav ({onSearch}) {

   return (     
    <div className= {`${styles.nav}`} >     
       <SearchBar onSearch={onSearch}/>               
     </div> 
    )    
    }

export default Nav;