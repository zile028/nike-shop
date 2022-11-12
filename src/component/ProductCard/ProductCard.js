import React from 'react';

function ProductCard({product}) {
    return (
        <div className="product">
            <img src={product.img} alt="product"/>
            <p>{product.title}</p>
        </div>
    );
}

export default ProductCard;