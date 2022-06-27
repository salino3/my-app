import React, { Fragment, useState } from 'react';

const Formfile = () => {

 const [datos, setDatos] = useState({
    nombre: '',
    apellido: ''
 })


 const handleChange = (event: any) => {
    console.log(event.target.value)
 setDatos({
   ...datos,
   [event.target.name] : event.target.value
 })
 }

const enviarDatos = (event: any) => {
    event.preventDefault();
    console.log('datos -> ', datos.nombre + ' ' + datos.apellido)
    event.target.reset()
}

  return (
    <Fragment>
      <h1>Formfile</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            name="nombre"
            type="text"
            placeholder="Ingrese nombre.."
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Ingrese apellido.."
            className="form-control"
            name="apellido"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <h3>
        {datos.nombre} - {datos.apellido}
      </h3>
    </Fragment>
  );
}

export default Formfile