import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from "./Context";
import Detalle from './views/Detalle';
import DetallePedido from "./views/DetallePedido";
import Home from "./views/Home";
import NotFound from './views/NotFound';


function App() {
  return (
        <BrowserRouter>
          <Context.Provider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizzas/:id" element={<Detalle/>} /> 
              <Route path="/carrito" element={<DetallePedido />} />
              <Route path="*" element={<NotFound />} />  
            </Routes>
          </Context.Provider>
        </BrowserRouter> 
  );
}

export default App;
