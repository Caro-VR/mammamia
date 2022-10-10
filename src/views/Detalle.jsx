import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from "../componentes/Navbar";
//import PizzasContext from "../context/PizzasProvider";

import '../css/Detalle.css';

const Detalle = () => {
  const [pizzasDetail, setPizzaDetail] = useState({});
  const { pizzas } = useContext(PizzasContext);
  const { id } = useParams();

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id ===id);

    setPizzaDetail(datosPizza || {});
  };

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);




  return (
    <>
    <Navbar />
      <div className="container mt-5">

      </div>
        
    </>
  )
}

export default Carrito;