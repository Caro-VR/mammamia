import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { PizzasProvider } from './context/PizzasProvider';
import Detalle from './views/Detalle';
import DetallePedido from "./views/DetallePedido";
import Home from "./views/Home";
import NotFound from './views/NotFound';


function App() {
  return (
      <BrowserRouter>
          <PizzasProvider>
          <Routes>
            <Route path="pizzas/">
              <Route path=":id" element={<Detalle/>} /> 
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<DetallePedido />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </PizzasProvider>
      </BrowserRouter> 
  );
}

export default App;
