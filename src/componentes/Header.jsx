import '../css/Header.css';

export default function Header() {
 
  return (
    <div className="text-center rounded-3 header">
      {/* <img className="pizza" src="https://delice-pizzas.fr/img/02.png" alt=""/> */}
      <h1 className="mb-3 titulo pt-3">Mamma Mía...</h1>
      <h3 className="mb-3 subtitulo pb-5">¡Las mejores pizzas que podrías encontrar!</h3>
    </div>
  )
};