import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/products" className="logo">
          AndrewStore
        </Link>
      </div>
    </header>
  );
}
