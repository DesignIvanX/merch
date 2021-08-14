import React from "react";

const Product = ({ product, handleAddToCart }) => {
  console.log(product);
  return (
    <div className="Products-item">
      <img
        src={`https://strapi-api-rest.herokuapp.com${product.image[0].url}`}
        alt={product.name}
      />
      <div className="Product-item-info">
        <h2>
          {product.name} <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Buy
      </button>
    </div>
  );
};

export default Product;
