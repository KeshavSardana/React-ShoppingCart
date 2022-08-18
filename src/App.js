import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container, Row, Col } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItems.findIndex(function (cartItem) {
      return cartItem.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast.error("Item is Already in your cart ");
    } else {
      setCartItems([...cartItems, item]);
      toast.success(`${item.productName} Added in your cart`);
    }
  };

  const buyNow = () => {
    setCartItems([]);
    toast.success("Purchase Completed");
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    toast.error(`${item.productName} removed from your cart`);
  };

  return (
    <Container fluid>
      <ToastContainer position="bottom-right" />
      <Row>
        <Col lg={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col lg={4}>
          <Cart cartItems={cartItems} buyNow={buyNow} removeItem={removeItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
