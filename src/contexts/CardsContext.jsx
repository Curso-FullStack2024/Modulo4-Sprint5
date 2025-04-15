
import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

export const CardsContext = createContext()

const url = 'https://clashroyaleapi-412e2ce9772c.herokuapp.com/cards'

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [totalCards, setTotalCards] = useState(0)

    //para paginado
    const cardsPerPage = 18
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCards, setCurrentCards] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    //busca la carta por id en el array de cartas del state
    const getCardById = (id) => {
        const card = cards.find((card) => card.id === id)
        return card
    }

    //POST
    const createCard = async (card) => {
        const { data } = await axios.post(url, card)
        setCards((prev) => [...prev, data])
    }

    // PUT 
    const updateCard = async (id, updatedData) => {
        const { data } = await axios.put(`${url}/${id}`, updatedData)
        setCards((prev) =>
            prev.map((item) => (item.id == id ? data : item))
        )
    }

    //DELETE
    const deleteCard = async (id) => {
        await axios.delete(`${url}/${id}`)
        setCards((prev) => prev.filter((item) => item.id != id))
    }



    // Cambio de página
    const paginate = (pageNumber) => {
        // Asegurarse de que el número de página esté dentro del rango válido
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            // Opcional: Desplazarse hacia arriba al cambiar de página
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        // Calcular el número total de páginas
        setTotalPages(Math.ceil(cards.length / cardsPerPage));
        // calcular el total de cartas
        setTotalCards(cards.length)

        // Actualizar las cartas que se muestran actualmente
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        setCurrentCards(cards.slice(indexOfFirstCard, indexOfLastCard));
    }, [cards, cardsPerPage, currentPage]);


    return (
        <CardsContext.Provider value={{ setCards, getCardById, createCard, deleteCard, updateCard, currentPage, totalPages, totalCards, currentCards, paginate }}>
            {children}
        </CardsContext.Provider>
    )
}

export const useCards = () => useContext(CardsContext)



