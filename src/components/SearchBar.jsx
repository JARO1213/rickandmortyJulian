import styles from './CSS_Components/card.module.css'
export default function SearchBar({onSearch}) {
  
     return (
      <div>
         {/* <button className = {`${styles.buttonAdd}`}onClick={()=>onSearch('it is executed')}>Agregar</button>  */}
         <input className={`${styles.searchStyle}`} type='search' />
        
      </div>
   );
}
