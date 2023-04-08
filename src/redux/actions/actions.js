 import { ADD_FAV, REMOVE_FAV } from "./types";  // SE IMPORTAN AL REDUCER TAMBIÉN
 

 export function addFav(character){
    return{
        type: ADD_FAV,
        payload:character,   //esto viene exportado desde el reducer. 
    }
 }

 export function removeFav(id){
    return{
        type: REMOVE_FAV,
        payload:id,   //esto viene exportado desde el reducer. 
    }
 }