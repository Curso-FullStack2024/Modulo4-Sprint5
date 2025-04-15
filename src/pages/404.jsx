import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const Page404 = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }, [])

    return (

        <div className=' flex flex-content justify-center bg-[url(/clashroyale_fondo2.jpg)] bg-cover bg-center bg-no-repeat h-full' >
            <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">

                <div className="flex flex-wrap justify-center gap-3 p-3 min-h-screen">

                    <div className='flex flex-content flex-col  border-1 border-yellow-400 rounded-lg items-center justify-center bg-gray-800 opacity-85 m-3   shadow-md shadow-yellow-800 w-300 relative'>
                        <h1 className="text-4xl font-bold text-yellow-400 my-3 text-center">Page Not Found</h1>

                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-gray-200 text-2xl pt-2 font-bold text-yellow-500'>No hay nada aquí</p>
                            <p className='text-gray-200 text-2xl pt-2 font-bold text-yellow-500' >Serás redirigido al Home </p>

                        </div>
                        <div className='flex flex-row items-center justify-center pt-8 gap-5'>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
