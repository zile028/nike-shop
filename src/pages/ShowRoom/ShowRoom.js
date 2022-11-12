import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";

function ShowRoom() {
    const {products} = useSelector((state) => state.productStore)
    const {category} = useParams()

    return (
        <section className="container">
            <aside>
                <h2>filter price</h2>
            </aside>
            <article>
                <h2>Products</h2>
                {products[category].map((el, index) => {
                    return <ProductCard key={index} product={el}/>
                })}
            </article>
        </section>
    );
}

export default ShowRoom;