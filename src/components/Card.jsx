import styles from './CSS_Components/card.module.css'

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
        <span>
         <button className = {`${styles.buttonClose }`} onClick = {()=> onClose(id)} >X</button>
         <img src={ image } alt= {name} className = {`${styles.imgStyle}`} />
         <h2 className = {`${styles.tittleCard}`}>Name: {name} </h2>
         {/* <h2 className = {`${styles.subtittleCard}`}>Status = {status} </h2> */}
         <h2 className = {`${styles.subtittleCard}`}>Species = {species}</h2>
         {/* <h2 className = {`${styles.subtittleCard}`}>Gender = {gender}</h2>
         <h2 className = {`${styles.subtittleCard}`}>Origin = {origin}</h2>
         */}
         </span>
      </div>);
}
