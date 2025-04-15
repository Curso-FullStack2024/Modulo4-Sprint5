import React from 'react'
import { ToastContainer } from 'react-toastify';
import { CardsProvider } from './contexts/CardsContext'

import Header from './components/Header'
import Footer from './components/Footer'

import AppRouter from './router/AppRouter';

function App() {


  return (
    <>
      <ToastContainer position='top-center' />
        <CardsProvider>
          <Header />
          <AppRouter />
          <Footer />
        </CardsProvider>
      

    </>
  )
}

export default App
