import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const FacebookIcon = () => {
    return (
        <p>
            <FaFacebookF style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

const InstagramIcon = () => {
    return (
        <p>
            <FaInstagram style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

const TwitterIcon = () => {
    return (
        <p>
            <FaTwitter style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

const PinterestIcon = () => {
    return (
        <p>
            <FaPinterest style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

const LinkedinIcon = () => {
    return (
        <p>
            <FaLinkedinIn style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

const MapMarkerIcon = () => {
    return (
        <p>
            <FaMapMarkerAlt style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

const EnvelopeIcon = () => {
    return (
        <p>
            <FaEnvelope style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

const PhoneIcon = () => {
    return (
        <p>
            <FaPhone style={{ color: '#c5c5c5' }} />
        </p>
    ); 
}

export { FacebookIcon, InstagramIcon, TwitterIcon, PinterestIcon, LinkedinIcon, MapMarkerIcon, EnvelopeIcon, PhoneIcon };
