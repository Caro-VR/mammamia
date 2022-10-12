import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import PizzasContext from "./PizzasContext";
import Detalle from './views/Detalle';
import DetallePedido from "./views/DetallePedido";
import Home from "./views/Home";
import NotFound from './views/NotFound';

export default function App() {
  const [pizzas, setPizzas] = useState([]);
  
  const endpoint = "/pizzas.json";

  const  getPizzas = async() => {
    const res = await fetch(endpoint);
    const data = await res.json();
    setPizzas(data);
  }
  
  useEffect(() => {
    getPizzas();
  }, []);

  return (
        <BrowserRouter>
          <PizzasContext.Provider value={{ pizzas, setPizzas }}>
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizzas/:id" element={<Detalle/>} /> 
                <Route path="*" element={<NotFound />} />
                <Route path="/carrito" element={<DetallePedido />} />
              </Routes>
          </PizzasContext.Provider>
        </BrowserRouter> 
  );
};
