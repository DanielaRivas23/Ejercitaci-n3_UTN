import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="header contenedor"> 
            <h1>Wine<span>Shop</span></h1>
            <nav className="nav">
                <a href="#">Inicio</a>
                <a href="#">Accesorios</a>
                <a href="#">Productos</a>
                <a href="#">Blog</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;