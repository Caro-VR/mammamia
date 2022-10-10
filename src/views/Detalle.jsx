import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from "../componentes/Navbar";
import Context from '../Context';

import '../css/Detalle.css';

const Detalle = () => {
  const [pizzasDetail, setPizzaDetail] = useState({});
  const { pizzas } = useContext(Context);
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

export default Detalle;