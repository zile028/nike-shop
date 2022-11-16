import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";
import "./showroom.scss";
import {useState} from "react";

function ShowRoom() {
	const {products} = useSelector((state) => state.productStore);
	const {category} = useParams();
	const [maxPrice, setMaxPrice] = useState(1000);
	const [currentPrice, setCurrentPrice] = useState(0);

	const rangeHandler = (e) => {
		setCurrentPrice(e.target.value);
	}

	return (
	  <section className="showroom container">
		  <aside>
			  <h3>Filter by price</h3>
			  <div>
				  <span className="price-min">0</span>
				  <span className="price-current">{currentPrice}</span>

				  <span className="price-max">{maxPrice}</span>
				  <input type="range" min={0} max={maxPrice} value={currentPrice} onChange={rangeHandler}/>
			  </div>
		  </aside>
		  <article>
			  {products[category].map((el, index) => {
				  return <ProductCard key={index} product={el}/>;
			  })}

		  </article>
	  </section>
	);
}

export default ShowRoom;
