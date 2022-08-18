import React, { useState, useEffect } from "react";

import Axios from "axios";

import { random, commerce, datatype } from "faker";

import { Container, Row, Col } from "reactstrap";

import MyCard from "./MyCard";

const BuyPage = ({ addInCart }) => {
  const [products, setProducts] = useState([]);

  const apiKey = "563492ad6f91700001000001fbbfcbfe4cf04304a399ee2ded35b8f7";
  const url = "https://api.pexels.com/v1/search?query=laptop&page=6&per_page=6";

  const localUrl = "https://myjson.dit.upm.es/api/bins/1upu";

  const fetchPhotosFromLcalJSON = async () => {
    const { data } = await Axios.get(localUrl);
    const { photos } = data;
    var allProducts = photos.map((photo) => ({
      productName: random.word(),
      productPrice: commerce.price(),
      id: datatype.uuid(),
      smallImage: photo.src.small,
      tinyImage: photo.src.tiny,
    }));

    setProducts(allProducts);
  };

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        authorization: apiKey,
      },
    });

    const { photos } = data;
    var allProducts = photos.map((photo) => ({
      productName: random.word(),
      productPrice: commerce.price(),
      id: datatype.uuid(),
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
    }));
    setProducts(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="text-center text-warning my-5">Buy Page</h1>
        {products.map((singleProduct, key) => (
          <Col key={key} xs={6} sm={6} lg={4} className="my-3">
            <MyCard
              product={singleProduct}
              addInCart={addInCart}
              className="mt-5"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
