import React, { Fragment } from 'react';
// npm install react-hook-form
import { useForm } from "react-hook-form";




const Validationfile = () => {

// const {register, errors, handleSubmit} = useForm()// versión antigua
  const { register, handleSubmit, formState: { errors }} = useForm();

 const onsubmit = (data: any, event: any) => {
    event.preventDefault();
    console.log(data)
    event.target.reset()
 }

  return (
    <Fragment>
      <div>Validationfile</div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <>
        <input
          title="title"
       
          type="text"
            //name="titulo"
          className="form-control my-2"
          {...register("titulo", {
            required: "Campo requerido", 
            maxLength: {
                value: 20,
                message: 'No más de 20 caracteres'
            },
            minLength: {
              value: 3,
              message : 'Minimo 3 caracteres'
            }
          })}
        />
     <span className='text-danger text-small d-block mb-2'> <>  { errors?.titulo?.message } </> </span>
   {/* <span className='text-danger text-small d-block mb-2'> <> {errors.message && errors.message.message} </> </span> */}
   <button className="btn btn-primary">Enviar</button>
     </>
      </form>
    </Fragment>
  );
}

export default Validationfile