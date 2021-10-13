import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Cart() {
  const { id } = useParams();
  const [cart, setCart] = useState({});
  useEffect(() => {
    const apiKey = `https://api.themoviedb.org/3/movie/${id}?api_key=784670b75891833569bbe2ab5bd3808c`;
    fetch(apiKey)
      .then((response) => response.json())
      .then((cartMovie) => setCart(cartMovie));
  }, []);
  return (
    <>
      <Link to="/main">Go to main</Link>
      <div>
        {cart.title}
        <button>Detete from cart</button>
      </div>
    </>
  );
}
