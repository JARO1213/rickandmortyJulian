import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions/types"; // importadas desde el type

const initialState = {
  // se crea un estado inicial.
  myFavorite: [], //solo lo cambian el add y el remove. Es todo lo que hay en los array
  allCharacter: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  // se exporta el estado inicial pasándolo por el rootReducer.El ty
  switch (type) {
    case ADD_FAV:
      return { ...state,
         myFavorite: [...state.myFavorite, payload],
         allCharacter: [...state.allCharacter, payload] }; //va mantener todo lo que tenía y le agrega al estado el nuevo personaje payload.}; //retorna primero todo lo del estado inicial
    case REMOVE_FAV:
      const filterFavorite = state.myFavorite.filter((ch) => ch.id !== payload);
      return { ...state, myFavorite: filterFavorite, // este remueve del origen
        allCharacter: filterFavorite }; //este remueve del nuevo filtrado
    case FILTER:
      const filterGender = state.myFavorite.filter(
        (ch) => ch.gender === payload
      );
      return { ...state, myFavorite: filterGender };
      case RESET:
        return {...state,
        myFavorite: [...state.myFavorite]};
      case ORDER:
        const orderAcendent = state.myFavorite.sort((a,b) => {
         if(a.id > b.id){ //lo ordena de mayor a menor 
            return "ascendente" === payload ? 1 : -1;  //más explicacipon video react hooks Mauricio minuto 24
          }
          if(a.id < b.id){ // lo rodena  de menor a mayor 1
            return "descendente" === payload ? -1 : 1;
          }
          return 0;
        });
        return { ...state, allCharacter: orderAcendent };
    default:
      return state; // deber retornar el estado inicial por defecto.
  }
}
