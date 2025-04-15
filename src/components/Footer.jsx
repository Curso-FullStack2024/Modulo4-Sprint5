import React from 'react'

const Footer = () => {

    return (

        < div className={`flex flex-col  bg-gray-900 w-full h-30 items-center text-gray-200 `} >
            <p className='p-5'>&copy; 2025 Clash Royale Card Manager.</p>
            <p className='text-sm'>Clash Royale Card Manager no está afiliado con Supercell, desarrollador oficial de Clash Royale.</p>
            <div className='flex  flex-row w-full justify-center content-stretch gap-5 text-xl'>

                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter-x"></i>


            </div>

        </div>
    )

}

export default Footer