import { useContext, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
//import Context from '../context/PizzasContext';
//import { NumericFormat } from 'react-number-format';

const Card = ({ pizzas }) => {
    //const { pizzas, addToCart } = useContext(Context);
    const { pizzas, setPizzas } = useContext (Context);

    async function getPizza(){
        const res = await fetch('./pizzas.json');
        const data = await res.json();
        setPizzas(data)
    };

    useEffect(() => {
        getPizza();
    }, []);


    const navigate = useNavigate();

    return (
        <>
            
            <div className='row'>
                {pizzas.map((pizza) =>
                <div key={pizza.id} className="col-3 mt-3">
                    <div className="card">
                        <img className="card-img-top" src={pizza.img} />
                        <div className="card-body">
                            <h4 className="card-title text-capitalize text-aling-center">Pizza {pizza.name}</h4>
                            <hr />
                            <p className="card-text">
                                <b>Ingredientes:</b>
                            </p>

                            <ListGroup variant="flush">
                                {pizza.ingredients.map((ingredient, i) =>
                                    <ListGroup.Item className="border-0 text-capitalize" key={i}>
                                        <img src={process.env.PUBLIC_URL + '/logo32.png'} width="24" height="24" className="d-inline-block aling-top ms-2" />
                                        {(ingredient)}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </div>
                        <div className="card-footer text-muted py-3">
                            <h2 className="text-center pt-2 pb-3">$ {pizza.price}</h2>
                            <div className="card-btn">
                                <button variant="dark" onClick={() => navigate('/pizza/' + pizza.id)}>
                                    Ver Más
                                    <img src={process.env.PUBLIC_URL + '/search.png'} width="24" height="24" className="d-inline-block aling-top ms-2" />
                                </button>
                                {/* <button variant="danger" onClick={() => toBuy(pizza.id)}>
                                    Agregar

                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default Card;