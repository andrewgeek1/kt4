import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

export default function NotFoundPage() {
  return (
    <div className="notfound-wrapper">
      <h1>404 — Страница не найдена</h1>
      <Link to="/products">
        <button className="notfound-btn">На главную</button>
      </Link>
    </div>
  );
}
