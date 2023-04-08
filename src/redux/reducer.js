import { ADD_FAV, REMOVE_FAV } from "./actions/types"; // importadas desde el type

const initialState = {
  // se crea un estado inicial.
  myFavorite: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  // se exporta el estado inicial pasándolo por el rootReducer.El ty
  switch (type) {
    case ADD_FAV:
      return {...state,
        myFavorite:[...state.myFavorite, payload]};//va mantener todo lo que tenía y le agrega al estado el nuevo personaje payload.}; //retorna primero todo lo del estado inicial
    case REMOVE_FAV:
    const filterFavorite = state.myFavorite.filter((ch)=> ch.id !== payload)
      return {...state, 
        myFavorite: filterFavorite,
      }

    default:
      return state; // deber retornar el estado inicial por defecto. 
  }

  
}
