import React, { useContext } from "react";

import AppContext from "../context/AppContext";

import Product from "../containers/Product";

import "../source/style/components/Products.css";

const Products = () => {
  const { products, addToCart } = useContext(AppContext);
  const handleAddToCart = (product) => () => {
    const random = Math.floor(Math.random() * 1000);
    const newProduct = { ...product, cartId: `${product.id}-${random}` };
    addToCart(newProduct);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
