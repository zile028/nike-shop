import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";
import "./showroom.scss";
import Loader from "../../component/Loader/Loader";

function ShowRoom() {
	const {products} = useSelector((state) => state.productStore);
	const {category} = useParams();
	const [loader, setLoader] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoader(false)
		}, 2000)
	}, [category]);


	return (
	  <section className="showroom container">
		  <aside>
			  <h2>filter price</h2>
		  </aside>
		  <article>
			  {products[category].map((el, index) => {
				  return <ProductCard key={index} product={el}/>;
			  })}
			  {loader && <Loader/>}
		  </article>
	  </section>
	);
}

export default ShowRoom;
