import React from "react";
import './Footer.css';
import { EnvelopeIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MapMarkerIcon, PhoneIcon, PinterestIcon, TwitterIcon } from "../IconosAwesome/Iconos";

const Footer = () => {
    return (
        <footer className="contenedor contenido-footer">
            <div className="nav nav-footer">
                <h3>Compañia</h3>
                <a href="#">Sobre nosotros</a>
                <a href="#">Contactanos</a>
                <a href="#">Políticas de privacidad</a>
                <a href="#">Términos&Condiciones</a>
            </div>
            <div>
                <h3>Conecta con nosotros</h3>
                <div className="redes">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/> 
                    <PinterestIcon/>
                    <LinkedinIcon/>
                </div>
                <div className="flex-contacto">
                    <MapMarkerIcon/> 
                    <p>123, Loren Ipsum, Italia</p>
                </div>
                <div className="flex-contacto">
                    <EnvelopeIcon/> 
                    <p>Info@demo.com</p>
                </div>
                <div className="flex-contacto">
                    <PhoneIcon/>
                    <p>123 456 7890</p>
                </div>
            </div>
            <p>Todos los derechos reservados. WineShop &copy; 2023</p>
        </footer>
    );
}

export default Footer;