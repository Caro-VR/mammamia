import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import { PizzasProvider } from "./PizzasContext";
import Detalle from './views/Detalle';
import DetallePedido from "./views/DetallePedido";
import Home from "./views/Home";
import NotFound from './views/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<Detalle/>} /> 
            <Route path="/carrito" element={<DetallePedido />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </PizzasProvider>
    </BrowserRouter> 
  );
};
