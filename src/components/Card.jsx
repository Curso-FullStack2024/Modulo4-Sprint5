import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({ id, name, image }) => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/card/${id}`)
    }


    return (
        <div className='flex flex-col items-center border-1 border-yellow-400 rounded-lg p-5  bg-gray-800 opacity-85 m-3  basis-64 shadow-md shadow-yellow-800 cursor-pointer' onClick={() => handleClick(id)}>
            <p className='text-gray-100 text-xl pt-2 font-bold' >{name} </p>
            <img src={image} alt={name} className='w-70 ' />
        </div>
    )
}

export default Card