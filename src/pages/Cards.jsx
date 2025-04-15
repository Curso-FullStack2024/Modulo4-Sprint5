import React, {  useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import Card from '../components/Card'
import { useCards } from '../contexts/CardsContext';
import { toast } from 'react-toastify';

const Cards = () => {
  const{cards , setCards}=useCards()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);


    const fetchCards = useCallback(async () => {
        setLoading(true)
        try {//obtiene los primeros 18 elementos de la api
            const response = await axios.get('https://clashroyaleapi-412e2ce9772c.herokuapp.com/cards?_page=1&_limit=18')
            setCards(response.data)

        } catch (err) {
            setError(err)
            toast.error('Error al cargar las cartas')
            console.error('Error fetching cards:', error)
        }
        finally {
             setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchCards()
    }, [])

    return (
        <>
            <div className=' flex flex-content justify-center bg-[url(/clashroyale_fondo2.jpg)] bg-cover bg-center bg-no-repeat h-full ' >
        
                <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">
                <h1 className="text-4xl font-bold text-yellow-400 my-3">Cartas</h1>
                    <div className=" absolute sweet-loading flex flex-content justify-center items-center ">

                        {/* loader */}
                        <ClipLoader
                            color='#ff9008'
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 p-3 min-h-screen">

                        {
                            cards && cards.map((item) => (

                                <Card key={item.id} id={item.id} name={item.name} elixirCost={item.elixirCost} image={item.iconUrls?.medium} />

                            ))
                        }
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Cards