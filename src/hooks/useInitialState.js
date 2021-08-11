import { useState } from "react";

import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);
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
    state,
  };
};

export default useInitialState;
