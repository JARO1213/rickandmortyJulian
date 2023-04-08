import { createStore, applyMiddleware } from "redux"; // lo más básuco es traer un herramienta que es llama creastore
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"; // este toca instalarlo para poder trabajarlo. 
import thunk from "redux-thunk"; // thunk vamos a averiguar que hace

const store = createStore(
  rootReducer, // hay que darle esta propiedad.
  composeWithDevTools(applyMiddleware(thunk)) // exportado desde reducer.  
);

export default store;