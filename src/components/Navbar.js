import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <Link style={{color: '#1b67bc'}} class="navbar-brand" to="/dashoard">OAZEN</Link>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav ">
                <li class="nav-item active">
                <Link class="nav-link" to="#">Generation de code</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="#">Gestion des utilisateurs</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="#">Indication des entreprises</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}