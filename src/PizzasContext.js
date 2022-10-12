import { createContext, useState } from "react";

const PizzasContext = createContext({});

export const PizzaProvider = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    const addItemToCart = (product) => {
        setCartItems([...cartItems, {...product}]);

        console.log(cartItems);
    }

    return (
        <PizzasContext.Provider value={{ cartItems, addItemToCart }}>

        </PizzasContext.Provider>
    )
}

export default PizzasContext;

