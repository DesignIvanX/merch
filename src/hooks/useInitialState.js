import { useState, useEffect } from "react";

import initialState from "../initialState";

const API = "https://strapi-api-rest.herokuapp.com/products";

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(API)
          .then((response) => response.json())
          .then((data) => setProducts(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const deleteFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => {
        return items.cartId !== payload.cartId;
      }),
    });
  };
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const sumTotal = (payload) => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = payload.reduce(reducer, 0);
    return sum;
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      order: [...state.orders, payload],
    });
  };
  return {
    addToCart,
    deleteFromCart,
    addToBuyer,
    sumTotal,
    addNewOrder,
    products,
    state,
  };
};

export default useInitialState;
