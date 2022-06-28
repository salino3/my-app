import React, { Fragment, useState } from "react";
//
import "../App.css";


const Secondfile = () => {

    let animales2 = ["gato", "perro", "raton", "serpiente"];

    const [first, setfirst] = useState(0);
    const [second, setsecond] = useState('');


const handlePush = () => {};
const handleChange = (event: any) => {
  setsecond(event.target.value)
};

  return (
    <Fragment>
      <div>Secondfile</div>
      <input onChange={handleChange} title="title" type="text"  />
      ~{second}~
      <button onClick={() => handlePush}>push</button>
      <ul>
        {animales2.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
      counter: {first}
      <div className="btns">
        <button
          className="boton btn-outline-primary"
          onClick={() => setfirst(0)}
        >
          Reset
        </button>
        <button
          className="boton btn-outline-warning"
          onClick={() => setfirst(first - 1)}
        >
          - 1
        </button>
        <button
          className="boton btn-outline-danger"
          onClick={() => setfirst(first + 1)}
        >
          + 1
        </button>
      </div>
    </Fragment>
  );
}

export default Secondfile