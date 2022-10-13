import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PizzasContext from '../PizzasContext';
import { useNavigate } from 'react-router-dom';

import '../css/Detalle.css';
import { useEffect } from 'react';
//import DetallePedido from './DetallePedido';

const Detalle = () => {
  const [pizza, setPizza] = useState(null);
  const { pizzas, addToCart } = useContext(PizzasContext);
  const { id } = useParams();
  const endpoint = "/pizzas.json";
  const navigate = useNavigate();

  // const pizza = pizzas.filter((pizza) => pizza.id ===id);

  // const navigate = useNavigate();

  useEffect(() => {
    const getPizza = async () => {
      // const res = await fetch(endpoint);
      // const data = await res.json();
      const result = pizzas.filter(obj => 
        obj.id === id
      )
      setPizza(result);
    }
    getPizza();
  }, []);

  return (
    <>
      {pizza ? (
        <div className="card-pizza mb-3">
          <div className="row-pizza no-gutters">
            <div key={pizza[0].id} className="pizza-nombre">
              <div className="card-imagen col-md-4">
                <img className="card-img" src={pizza[0].img} />
              </div>
              <div className="card-bodypizza col-md-8 ">
                <h4 className="card-titlepizza text-capitalize">Pizza {pizza[0].name}</h4>
                <hr />
                <p className="text-align-center">{pizza[0].desc}</p>
                <hr />

                <p className="card-text">
                  <b>Ingredientes:</b>
                </p>

                <ul variant="flush">
                  {pizza[0].ingredients.map((ingredient, i) =>
                    <li className="border-0 text-capitalize" key={i}>
                      🍕
                     {(ingredient)}
                    </li>
                  )}
                </ul>
              </div>
              <div className="card-footerpizza text-muted py-3">
                <hr />
                <h2 className="text-pizza">Precio $ {pizza[0].price}</h2>
                <hr />
                <div className="card-btnpizza">
                  {/* <select type="number" value={1} disabled /> */}
                  <button className="btn-pizza btn-success" variant="dark" onClick={ () => addToCart(pizza[0]) }>Añadir ✔</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Detalle;