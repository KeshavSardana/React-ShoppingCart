import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const MyCard = ({ product, addInCart }) => {
  return (
    <Card className="text-center">
      <CardImg height="200px" src={product.smallImage} />
      <CardBody>
        <CardTitle className="">
          <h3>{product.productName}</h3>
        </CardTitle>
        <CardText>{product.productPrice} </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Add in Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default MyCard;
