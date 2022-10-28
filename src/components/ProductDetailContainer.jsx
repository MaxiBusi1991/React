import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setApi(json));
  }, []);

  return <ProductDetail api={api} />;
};

export default ProductDetailContainer;
