import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCards } from '../contexts/CardsContext'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'


//validaciones
const schema = yup.object().shape({
  name: yup.string().required('el nombre es obligatorio'),
  maxLevel: yup.number('debe ingresar un número').min(1, 'el nivel máximo debe ser mayor o igual a 1').max(99, 'el nivel máximo debe ser menor o igual a 99').required('deber indicar el nivel máximo '),
  maxEvolutionLevel: yup.number('debe ingresar un número').nullable().transform((value, originalValue) =>
    originalValue === '' ? null : value).min(1, 'el nivel máximo debe ser mayor o igual a 1').max(99, 'el nivel máximo de evolución debe ser menor o igual a 99'),
  elixirCost: yup.number('debe ingresar un numero').min(1, 'el costo de elixir debe ser mayor o igual a 1').max(9, 'el costo de elixir debe ser menor o igual a 9').required('el costo de elixir es obligatorio'),
  rarity: yup.string().required('la calidad es obligatoria'),
  medium: yup.string().url('debe ingresar una URL válida').matches(/\.(jpeg|jpg|gif|png|webp|svg)$/i, 'Debe ser una URL de imagen válida').required(),
  evolutionMedium: yup.string().url('debe ingresar una URL válida').matches(/\.(jpeg|jpg|gif|png|webp|svg)$/i, 'Debe ser una URL de imagen válida').nullable()
    .transform((value, originalValue) =>
      originalValue === '' ? null : value)
})


export const CardCreate = () => {
  const { register, formState: { errors }, handleSubmit, } = useForm({ resolver: yupResolver(schema) })

  const { createCard } = useCards()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    // asigna los valores de Data a un objeto card
    const card = {
      name: data.name,
      maxLevel: data.maxLevel,
      maxEvolutionLevel: data.maxEvolutionLevel,
      elixirCost: data.elixirCost,
      rarity: data.rarity,
      iconUrls: {
        medium: data.medium,
        evolutionMedium: data.evolutionMedium
      }
    }
    try { //envia el objeto card 
      await toast.promise(
        createCard(card),
        {
          pending: 'Agregando la nueva carta...',
          success: 'Carta agregada con éxito! 🎉',
          error: 'Error al agregar la carta! '
        }
      );

      navigate(`/cards`)

    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo crear la carta. Intenta nuevamente.',
        footer: error.message,
        confirmButtonText: 'Aceptar'
      })
    }

  }


  return (

    <div className=' flex flex-content justify-center bg-[url(/clashroyale_fondo2.jpg)] bg-cover bg-center bg-no-repeat h-full' >
      <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">


        <div className="flex flex-wrap justify-center gap-3 p-3 min-h-screen">

          <div className='flex flex-content flex-col  border-1 border-yellow-400 rounded-lg items-center  bg-gray-800 opacity-85 p-5  md:m-3   shadow-md shadow-yellow-800 w-full md:w-300 relative'>
            <h1 className="text-4xl font-bold text-yellow-400 my-3 text-center">Nueva carta</h1>
            <div className='    absolute  right-5 top-5 text-yellow-500 text-3xl cursor-pointer' onClick={() => navigate(-1)} title='Volver'><i className="bi bi-arrow-left-square"></i></div>
            <form name='form1' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-content flex-col '>

                <div className='flex items-center gap-2 my-2'>
                  <label htmlFor="nombre" className="text-yellow-400 md:text-lg">Nombre: </label>
                  <input {...register('name', { required: true })}
                    className='border-1 border-yellow-600 text-gray-200 focus:outline-none p-1 md:text-lg'  ></input>
                  <p className='text-red-500'>{errors.name?.message}</p>
                </div>
                <div className='flex items-center gap-2 my-2'>
                  <label htmlFor="maxLevel" className="text-yellow-400 md:text-lg">Nivel máximo: </label>
                  <input type="number" {...register('maxLevel', { required: true, min: 1, max: 99, maxLength: 2 })}
                    className='border-1 border-yellow-600 text-gray-200 md:text-lg focus:outline-none p-1 ' size={3} ></input>
                  <p className='text-red-500'>{errors.maxLevel?.message}</p>
                </div>

                <div className='flex items-center gap-2 my-2'>
                  <label htmlFor="maxEvolutionLevel" className="text-yellow-400 md:text-lg">Nivel máximo de  evolución: </label>
                  <input type="number" {...register('maxEvolutionLevel')}
                    className='border-1 border-yellow-600 text-gray-200 md:text-lg focus:outline-none p-1' max={99} min={1} size={3} ></input>
                  <p className='text-red-500'>{errors.maxEvolutionLevel?.message}</p>
                </div>

                <div className='flex items-center gap-2 my-2'>
                  <label htmlFor="elixirCost" className="text-yellow-400 md:text-lg focus:outline-none p-1">Costo de elixir: </label>
                  <input type="number" {...register('elixirCost', { required: true })}
                    className='border-1 border-yellow-600 text-gray-200 md:text-lg focus:outline-none p-1' max={9} min={1} size={3} ></input>
                  <p className='text-red-500'>{errors.elixirCost?.message}</p>
                </div>

                <div className='flex items-center gap-2 my-2'>
                  <label htmlFor="rarity" className="text-yellow-400 md:text-lg">Calidad: </label>
                  <input
                    {...register('rarity', { required: true })}
                    className='border-1 border-yellow-600 text-gray-200 md:text-lg focus:outline-none p-1'  ></input>
                  <p className='text-red-500'>{errors.rarity?.message}</p>

                </div>

                <div className='flex items-center gap-2 my-2'>
                  <label htmlFor="medium" className="text-yellow-400 md:text-lg">Imagen del personaje: </label>
                  <input {...register('medium',)}
                    className='border-1 border-yellow-600 text-gray-200 md:text-lg focus:outline-none p-1 w-50 md:w-150' ></input>
                  <p className='text-red-500'>{errors.medium?.message}</p>
                </div>

                <div className='flex items-center gap-2 my-2'>
                  <label htmlFor="medium" className="text-yellow-400 md:text-lg">Imagen de evolución: </label>
                  <input {...register('evolutionMedium',)}
                    className='border-1 border-yellow-600 text-gray-200 md:text-lg focus:outline-none p-1 w-50 md:w-150'  ></input>
                  <p className='text-red-500'>{errors.evolutionMedium?.message}</p>
                </div>

              </div>

              {/* Botonera */}
              <div className='flex flex-row items-center justify-center pt-8 gap-5'>
                <button type="submit" className='bg-yellow-600 text-gray-100 hover:bg-yellow-700 p-2 rounded-lg m-2 w-25'>Guardar</button>
                <button type="reset" className='bg-red-500 text-gray-200 hover:bg-red-800 p-2 rounded-lg m-2 w-25' >Cancelar</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>

  )
}

export default CardCreate