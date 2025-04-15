
import { createContext, useState, useContext } from 'react'
import axios from 'axios'

export const CardsContext = createContext()

const url = 'https://clashroyaleapi-412e2ce9772c.herokuapp.com/cards'

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState([])

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

    return (
        <CardsContext.Provider value={{ cards, setCards, getCardById,   createCard, deleteCard, updateCard  }}>
            {children}
        </CardsContext.Provider>
    )
}

export const useCards = () => useContext(CardsContext)



