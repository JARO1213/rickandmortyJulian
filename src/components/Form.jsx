import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
const regepassword = /^[a-zA-Z]\w{3,14}$/;

export default function Forms() {
  const [inputs, setInputs] = useState({
    //setea los estados en e-mail y password
    email:"",
    password:"",
  });

  const [errors, setErrors] = useState({
    //setea los errores en e-mail y password
    email:"",
    password:"",
  });
  function validate(inputs) {
    //esta función valida  los errores en e-mail y password
    const errors = {};
    if (!inputs.email) {
      errors.email = "Must be completed with an e-mail";
    } else if (!inputs.password) {
      errors.password = "Must be completed as a password";
    } else if (!regemail.test(inputs.email)) {
      errors.password = "Must be a valid password";
    } else if (!regepassword.test(inputs.password)) {
      errors.password =
        "must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used";
    }
    return errors
  }

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value }); //para efectuar los cambios en el input
    setErrors(validate({ ...inputs, [e.target.name]: e.target.value })); // para validar el contenido de los inputs(bindear)
  }
  function handleSubmit(e) {    //maneja el error en el submit. Lo envía a la consola.
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      return alert("Everthing was good");
    }
    return alert("Error");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>e-mail</label>
        <input
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder=""
        ></input>
        <p className ="danger">{errors.email}</p>
        <label>Password: </label>
        <input
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder=""
        ></input>
        <p className="danger">{errors.password}</p>
        {Object.keys(errors).length === 0 ? (
          <Link to="/home">
            <button type="submit">Submit</button>
          </Link>
        ) : null}
      </form>
    </div>
  );
}
