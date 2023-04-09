import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./types"; // SE IMPORTAN AL REDUCER TAMBIÉN

export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character, //esto viene exportado desde el reducer.
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id, //esto viene exportado desde el reducer.
  };
}
export function filterCards(gender) {
    return {
      type: FILTER,
      payload: gender, //esto viene exportado desde el reducer.
    };
  }
  export function orderCards(order) {
    return {
      type: ORDER,
      payload: order //esto viene exportado desde el reducer.
    };
  }

  export function reset() {
    return {
      type: RESET,
    };
  }
