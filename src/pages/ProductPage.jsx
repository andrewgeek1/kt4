import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Stars from "../components/Stars";
import "../styles/product.css";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2 style={{ padding: 20 }}>Загрузка...</h2>;

  return (
    <div className="product-wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>← Назад</button>

      <h1>{product.title}</h1>

      <div className="product-content">
        <img className="product-img" src={product.image} alt={product.title} />

        <div className="product-text">
          <Stars rating={product.rating?.rate} />
          <h2>Цена: ${product.price}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
