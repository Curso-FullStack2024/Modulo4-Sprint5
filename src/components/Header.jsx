import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-gray-900 to-gray-700 p-4 h-70 md:h-51 md:px-40 '>

            <div className="absolute ">
                <img src="/logo.png" alt="Clash Royale logo" className='h-60' />
            </div>
            <nav className="flex justify-center items-center mt-58 md:mt-40 ">
                <ul className="flex space-x-4 text-white">
                    <li><Link to="/" className="hover:text-yellow-600">Home</Link></li>
                    <li><Link to="/cards" className="hover:text-yellow-600">Cartas</Link></li>
                    <li><Link to="/card/create" className="hover:text-yellow-600">Agregar Carta</Link></li>
                </ul>
            </nav>
        </div>



    )
}

export default Header