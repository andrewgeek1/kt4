import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import "../styles/products.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      <h1>Все товары</h1>

      <div className="products-grid">
        {products.map(p => (
          <Link to={`/product/${p.id}`} key={p.id} className="product-card-link">
            <div className="product-card">

              <div style={{ textAlign: "center" }}>
                <img src={p.image} alt={p.title} />
              </div>

              <div className="product-title">{p.title}</div>

              <Stars rating={p.rating?.rate} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
