import React, { useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
  CardImg,
  CardFooter,
} from "reactstrap";

const Cart = ({ removeItem, buyNow, cartItems }) => {
  let amount = 0;
  cartItems.map(
    (item) => (amount = parseFloat(amount) + parseFloat(item.productPrice))
  );

  return (
    <Container fluid>
      <h1 className="text-center text-warning my-5">Your Cart</h1>
      {cartItems.length >= 1 ? (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroupItem>
              <Row>
                <Col center md={7} xs={6}>
                  <img height="90px" width="140px" src={item.tinyImage} />
                </Col>
                <Col top xs={4} right className="text-center ">
                  <div>
                    <h5 className="text-primary mt-2">{item.productName}</h5>
                  </div>
                  <span className="m-2">{item.productPrice}</span>
                  <span>
                    <Button
                      color="danger"
                      onClick={() => removeItem(item)}
                      className="p-1"
                    >
                      Remove Item
                    </Button>
                  </span>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
          {
            <Card className="my-5">
              <CardHeader className="text-success text-center">
                <h3>Grand Total </h3>
              </CardHeader>
              <CardBody>
                <CardText className="text-center">
                  <h4>
                    Total of your {cartItems.length}
                    {cartItems.length === 1 ? " product " : " products "} is :{" "}
                    {amount}
                  </h4>
                  <CardFooter>
                    <Button
                      color="success"
                      className="text-center px-5"
                      onClick={buyNow}
                    >
                      Pay
                    </Button>
                  </CardFooter>
                </CardText>
              </CardBody>
            </Card>
          }
        </ListGroup>
      ) : (
        <container className="text-center text-warning">
          <Row>
            <Col className="display-5">Your Cart is Empty</Col>
          </Row>
        </container>
      )}
    </Container>
  );
};

export default Cart;
