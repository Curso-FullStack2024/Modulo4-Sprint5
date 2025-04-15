import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCards } from '../contexts/CardsContext'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

export const CardDetail = () => {
    const { id } = useParams()
    const { getCardById, cards, deleteCard } = useCards()
    const [currentCard, setCurrentCard] = useState({})

    const navigate = useNavigate()

    const handleDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás recuperar la carta eliminada",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {           ////envia la ID para eliminar la carta
                    await toast.promise(
                        deleteCard(id),
                        {
                            pending: 'Eliminando carta...',
                            success: 'Carta eliminada con éxito! 🎉',
                            error: 'Error al eliminar la carta! '
                        }
                    );
                    //vuelve al listado de cartas
                    navigate(`/cards`)

                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo eliminar la carta',
                        footer: error.message,
                        confirmButtonText: 'Aceptar'
                    })
                    console.error('Error deleting card:', error)

                }
            }
        })
    }

    useEffect(() => {
        //obtiene la carta por ID y la asigna a currentCard en el estado
        setCurrentCard(getCardById(Number(id)))
    }
        , [cards], id)

    return (

        <div className=' flex flex-content justify-center bg-[url(/clashroyale_fondo2.jpg)] bg-cover bg-center bg-no-repeat h-full' >
            <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">


                <div className="flex flex-wrap justify-center gap-3 p-3 min-h-screen">
                    {currentCard &&

                        <div className='flex flex-content flex-col  border-1 border-yellow-400 rounded-lg items-center  bg-gray-800 opacity-85 p-5  md:m-3   shadow-md shadow-yellow-800 w-full md:w-300 relative'>
                            <h1 className="text-4xl font-bold text-yellow-400 my-3 text-center">{currentCard.name}</h1>
                            <div className='     absolute  right-5 top-5 text-yellow-500 text-3xl cursor-pointer' onClick={() => navigate(`/cards`)} title='Volver'><i className="bi bi-arrow-left-square"></i></div>
                            <div className='flex flex-content flex-col md:flex-row items-center justify-center'>
                                {currentCard.iconUrls?.medium && <img src={currentCard.iconUrls?.medium} alt={currentCard.name} className='w-50 md:w-80 ' />}
                                {currentCard.iconUrls?.evolutionMedium && <img src={currentCard.iconUrls?.evolutionMedium} alt={currentCard.name} className='w-50 md:w-80 ' />}
                            </div>
                            <div className='flex flex-col '>
                                <p className='text-gray-200 md:text-2xl pt-2 ' ><span className='font-bold text-yellow-500'>Nombre:</span> {currentCard.name} </p>
                                <p className='text-gray-200 md:text-2xl pt-2 ' ><span className='font-bold text-yellow-500'>Nivel Máximo:</span> {currentCard.maxLevel} </p>
                                <p className='text-gray-200 md:text-2xl pt-2 ' ><span className='font-bold text-yellow-500'>Nivel máximo de evolución:</span> {currentCard.maxEvolutionLevel} </p>
                                <p className='text-gray-200 md:text-2xl pt-2 ' ><span className='font-bold text-yellow-500'>Costo de elixir:</span> {currentCard.elixirCost} </p>
                                <p className='text-gray-200 md:text-2xl pt-2 ' ><span className='font-bold text-yellow-500'>Calidad: </span>{currentCard.rarity} </p>
                            </div>
                            <div className='flex flex-row items-center justify-center pt-8 gap-5'>
                                <button className='bg-yellow-600 text-gray-100 hover:bg-yellow-700 p-2 rounded-lg m-2 w-25' onClick={() => navigate(`/card/${id}/edit`)}>Editar</button>
                                <button className='bg-red-500 text-gray-200 hover:bg-red-800 p-2 rounded-lg m-2 w-25' onClick={() => handleDelete(id)}>Eliminar</button>
                            </div>

                        </div>

                    }
                </div>
            </div>
        </div>

    )
}
