import React from 'react';
import { Link } from 'react-router-dom';
import titreOazen from '../assets/titreoazenlast.png';

export const ColorLink = {
    color: "#1b67bc",
    fontWeight: "bold",
    fontFamily: "Source Sans Pro, sans-serif"
}

export function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <Link class="navbar-brand" to="/dashoard"><img src={titreOazen} alt="titre oazen"/></Link>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav ">
                <li className="nav-item">
                <Link style={ColorLink} className="link nav-link" to="/dashboard">Generation de code</Link>
                </li>
                <li className="nav-item">
                <Link style={ColorLink} className="nav-link" to="/gestion-utilisateur">Gestion des utilisateurs</Link>
                </li>
                <li className="nav-item">
                <Link style={ColorLink} className="nav-link" to="/indication-entreprise">Indication des entreprises</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}