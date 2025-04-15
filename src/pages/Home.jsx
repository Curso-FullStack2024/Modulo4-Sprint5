import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
        
            <div className=' flex flex-content bg-[url(/ClashRoyale_fondo.jpg)] bg-cover bg-center bg-no-repeat h-full  '>
                <div className="flex flex-col justify-center items-center w-full h-full bg-black/20">
                    <div className=" h-full max-w-7xl mx-auto  px-4 py-8 rounded-lg shadow-lg  bg-black/20">
                    
                        {/* <!-- Header --> */}
                        <header className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-yellow-400 mb-2">Clash Royale Card Manager</h1>
                            <p className="text-xl font-semibold text-yellow-600">Tu colección de cartas bajo control</p>
                        </header>

                        {/* <!-- Introducción --> */}
                        <section className="mb-12">
                            <p className="text-lg text-center max-w-3xl mx-auto text-gray-100">
                                ¡Bienvenido al <span className="font-bold">Clash Royale Card Manager</span>, la herramienta definitiva para gestionar tu colección de cartas! Nuestra plataforma te permite administrar de forma sencilla todas las cartas del juego que has desbloqueado, crear estrategias ganadoras y seguir tu progreso en la arena.
                            </p>
                        </section>

                        {/* <!-- Características (CRUD) --> */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-yellow-300 mb-8 text-center">¿Qué puedes hacer aquí?</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* <!-- Consulta (Read) --> */}
                                <Link to="/cards">
                                    <div className="bg-white/85 p-6 rounded-lg shadow-md " > 
                                        <h3 className="flex items-center text-xl font-semibold text-blue-600 mb-3">
                                            <span className="mr-2 text-2xl">📋</span> Consulta todas las cartas
                                        </h3>
                                        <p>Explora nuestra base de datos completa con todas las cartas disponibles en Clash Royale. Filtra por rareza, elixir, tipo de tropa o arena de desbloqueo para encontrar rápidamente la carta que buscas.</p>
                                    </div>
                                </Link>
                                {/* <!-- Añade (Create) --> */}
                                <Link to="/card/create">
                                    <div className="bg-white/85 p-6 rounded-lg shadow-md">
                                        <h3 className="flex items-center text-xl font-semibold text-blue-600 mb-3">
                                            <span className="mr-2 text-2xl">➕</span> Añade nuevas cartas
                                        </h3>
                                        <p>¿Has conseguido una nueva carta legendaria? ¡Agrégala a tu colección! Registra su nivel actual, la cantidad de cartas que tienes y establece tus propias notas sobre estrategias.</p>
                                    </div>
                                </Link>
                                {/* <!-- Actualiza (Update) --> */}
                                <div className="bg-white/85 p-6 rounded-lg shadow-md">
                                    <h3 className="flex items-center text-xl font-semibold text-blue-600 mb-3">
                                        <span className="mr-2 text-2xl">🔄</span> Actualiza tu progreso
                                    </h3>
                                    <p>A medida que subas de nivel tus cartas, actualiza fácilmente su información. Modifica los niveles, la cantidad de cartas acumuladas o cambia tus anotaciones sobre cada una.</p>
                                </div>

                                {/* <!-- Elimina (Delete) --> */}
                                <div className="bg-white/85 p-6 rounded-lg shadow-md">
                                    <h3 className="flex items-center text-xl font-semibold text-blue-600 mb-3">
                                        <span className="mr-2 text-2xl">🗑️</span> Elimina cartas obsoletas
                                    </h3>
                                    <p>¿Hay cartas que ya no utilizas en tus mazos? Manténlas fuera de tu vista eliminándolas de tu colección activa, pero siempre podrás recuperarlas si cambias de opinión.</p>
                                </div>
                            </div>
                        </section>



                        {/* <!-- Testimonio --> */}
                        <div className="bg-blue-50/90 p-6 rounded-lg text-center italic mt-30 mb-02">
                            <p className="text-lg">"¡La mejor herramienta para jugadores competitivos que quieren llevar un seguimiento de su colección!" - ClashPro Magazine</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
