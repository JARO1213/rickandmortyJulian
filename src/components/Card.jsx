import styles from "./CSS_Components/card.module.css";
import { Link } from "react-router-dom";
import { connect} from "react-redux"; //use Dispatch. hace lo mismo parecido =  trae este método para conectar react-redux no exporta convecionalmente sino exportada
import { addFav, removeFav } from "../redux/actions/actions"; //traigo las actions para ponerlas en la función dispatch
import { useEffect, useState } from "react";


function Card(props){
 const {
  id,
  name,
//   status,
  species,
//   gender,
//   origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}= props;
  // const dispatch = useDispatch();
  // dispatch(addFav({}));  //esto en lugar del connect de abajo, el add fav se agrega a las propiedades, teambién con connect se agregan las propiedades
  const [isFav, setIsFav] = useState(false); // setea un estado para que escuche react

  function handleFavorite() {
    // para agregar los favoritos
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  }
  useEffect(() => {
   myFavorites.forEach((fav) => {      
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);// revisa cuales están en favoritos y cuales no. // MINUTO 37:57

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={`${styles.buttonClose}`} onClick={() => onClose(id)}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <span>
          <img src={image} alt={name} className={`${styles.imgStyle}`} />
          <h2 className={`${styles.tittleCard}`}> {name} </h2>
          <h2 className={`${styles.subtittleCard}`}>{species}</h2>
        </span>
      </Link>
    </div>
  );
}
function maStateToProp(state) { //estado (el null, ahora es este estado de abajo)
   return {
    myFavorites: state.myFavorites,
   };
 }
function mapDispatchToProp(dispatch) {
  // se hace tambipn para la función eestado estado (el null de abajo)
  return {
    addFav: (ch) => dispatch(addFav(ch)), // ya no es una función común sino de tipo dispatch
    removeFav: (id) => dispatch(removeFav(id)), // ya no es una función común sino de tipo dispatch
  };
}
export default connect(maStateToProp, mapDispatchToProp)(Card); // primero la función que se conecta al estado, y después las funciones que conectan con el dispatch, ejecutamos tipo actions. Luego el parentesis con nombre a este componente pasándole propiedades dispathc o state
