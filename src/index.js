import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter } from 'react-router-dom' // para hacer las rutas. 
import { Provider } from 'react-redux'  // necesito trabajar con el store de react redux. Provee conexión con el store. 
import store  from './redux/store'// se importa el store y se le pasa por propiedad al provider.

const root = ReactDOM.createRoot(document.getElementById ("root")); // provider, por encima de BrowserRouter que también la envuelve. envuelve la aplicación}
root.render(
  <Provider store={store}> 
  <BrowserRouter>
  <App />
 </BrowserRouter>
 </Provider>
)
