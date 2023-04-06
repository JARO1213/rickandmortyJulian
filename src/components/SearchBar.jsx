import React, {useState} from 'react';
import styles from './CSS_Components/card.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   function handleChange (event){
      setId (event.target.value)
   }

     return (
    <div className= {styles.Nav} >     
         <button className = {`${styles.buttonAdd}`} onClick={()=>onSearch(id)}>Buscar</button> 
         <input onChange={handleChange} className={`${styles.searchStyle}`} type='search' name='search' value={id}/>      
      </div>
   );
}
