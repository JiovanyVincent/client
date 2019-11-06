import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Content } from '../views/Content';
import { GestionUser } from './GestionUser';
import { IndicationEntreprise } from './IndicationEntreprise';

export const Dashboard = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/dashboard">
                        <Content />
                    </Route>
                    <Route path="/gestion-utilisateur">
                        <GestionUser />
                    </Route>
                    <Route path="/indication-entreprise">
                        <IndicationEntreprise />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}