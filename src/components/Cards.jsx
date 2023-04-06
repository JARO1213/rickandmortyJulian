import Card from './Card';
import styles from './CSS_Components/card.module.css'
// import Nav from './Nav'
export default function Cards({characters, onClose}) {
   // const onClose = () => window.alert('Emulamos que se cierra la card');
   return(
       <div  className = {`${styles.unorderedList}`}>
        {characters && characters.map((character, index) => {
            return( 
            <div  className = {`${styles.listItem }`}>
         <Card 
             key = {index}
             id = {character.id}
             name = {character.name}
             status= {character.status}
             species = {character.species}  
             gender = {character.gender} 
             origin = {character.origin.name}  
             image = {character.image}  
             onClose={onClose}   
         />
         </div>
            )
        })}
      </div>
   )
}
