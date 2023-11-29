import React from 'react'
import { useForm } from 'react-hook-form';
const Formulario = () => {
     const { register, handleSubmit } = useForm();

     const enviar = (data) => {
      console.log(data);
     }
  return (
    <div>
      <h1>Esta es una Prueba con useForm</h1>
      <form onSubmit={handleSubmit(enviar)}>
        <input type='text' placeholder='ingrese su nombre' {...register('nombre')}/>
        <input type='email' placeholder='ingrese su email' {...register('email')}/>
        <input type='phone' placeholder='ingrese su telefono' {...register('telefono')}/>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario
