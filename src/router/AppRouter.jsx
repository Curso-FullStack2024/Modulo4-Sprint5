import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import Cards from '../pages/Cards'
import { CardCreate } from '../pages/CardCreate'
import { CardDetail } from '../pages/CardDetail'
import { CardEdit } from '../pages/CardEdit'
import { Page404 } from '../pages/404'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/card/create" element={<CardCreate />} />
            <Route path="/card/:id" element={<CardDetail />} />
            <Route path="/card/:id/edit" element={<CardEdit />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}
export default AppRouter