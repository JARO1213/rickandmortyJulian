import  React from "react";
import styles from './CSS_Components/card.module.css'

export default function NavBar({onSearch})  {
    return      <div className={styles.navBar}>     
       
         <button className = {`${styles.buttonAdd}`}onClick={()=>onSearch('it is executed')}>Agregar</button> 
         <input className={`${styles.searchStyle}`} type='search' />
        
     </div>   
   
    }