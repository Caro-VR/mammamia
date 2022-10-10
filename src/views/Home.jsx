import Card from '../componentes/Card';
import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';
//import PizzasList from '../containers/PizzasList';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <PizzasList />
        </>
    );
};

export default Home;