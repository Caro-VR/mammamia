import { Link } from 'react-router-dom'
import '../css/Navbar.css';
import { useContext } from 'react';
//import PizzasContext from "../context/PizzasProvider";
//import { formatNumber } from "../helpers/formatNumber";



export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : 'undefined');

    const { carrito }= useContext(PizzasContext);
    const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <div className="navbar navbar d-flex padding 2%" >
        <div className="container d-block">
            <Link className={setActiveClass} to="/">
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/samsung/128/slice-of-pizza_1f355.png" width="50" height="50" className="d-inline-block align-top" alt=""/> Pizzeria Mamma Mía!!!
            </Link>
        </div>
        <div className="carrito">
            <Link className={setActiveClass} to="/carrito">
                <img src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" width="50" height="50" className="d-inline-block align-top" alt=""/> Carrito
                <h4 className="mb-0"> &#128722; {''} Total: ${formatNumber(total)}</h4>
            </Link>
        </div>
    </div>
  )
};
