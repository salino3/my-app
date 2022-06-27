import React, { Fragment, useState } from "react";
// npm install react-hook-form
import { useForm } from "react-hook-form";


const Thirdfile = () => {

    const [second, setsecond] = useState<any>([]);

  const { register, handleSubmit, formState: { errors }} = useForm();

const onsubmit = (data: any, event: any) => {
    console.log(data)
      event.preventDefault();
      event.target.reset();
    setsecond([
        ...second,
        data
    ]);
    
}
  return (
    <Fragment>
      <div>Thirdfile</div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          type="text"
          title="titulo"
          placeholder="Ingrese título"
          className="form-control my-2"
          {...register("titulo", {
            required: "Campo requerido",
            maxLength: {
              value: 20,
              message: "No más de 20 caracteres",
            },
            minLength: {
              value: 3,
              message: "Minimo 3 caracteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          <>{errors?.titulo?.message} </>
        </span>

        <input
          type="text"
          title="titulo"
          placeholder="Ingrese descripción"
          className="form-control my-2"
          {...register("descripcion", {
            required: "Campo requerido",
            maxLength: {
              value: 20,
              message: "No más de 20 caracteres",
            },
            minLength: {
              value: 3,
              message: "Minimo 3 caracteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {" "}
          <>{errors?.descripcion?.message} </>{" "}
        </span>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
      <ul>
        {second.map((item: any, index: any) => (
          <li key={index}>
            {item.titulo} - {item.descripcion}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Thirdfile