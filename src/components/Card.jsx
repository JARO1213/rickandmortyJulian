import styles from './CSS_Components/card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div> 
           <button className = {`${styles.buttonClose }`} onClick = {()=> onClose(id)} >X</button>
      <Link to={`/detail/${id}`}>
          <span>
       
         <img src={ image } alt= {name} className = {`${styles.imgStyle}`} />
         <h2 className = {`${styles.tittleCard}`}>Name: {name} </h2>
         <h2 className = {`${styles.subtittleCard}`}>Species: {species}</h2>
         </span>
      </Link>
      </div>);
}
