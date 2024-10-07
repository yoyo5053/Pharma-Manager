import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Reports from './Reports';
import Configuration from './Configuration';

export default function MainBar() {
    return(
        <Container>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Dashboard/>}/>
                    <Route  path="/dashboard"   element={<Dashboard/>} />
                    <Route  path="/inventory" element={<Inventory/>} />
                    <Route  path="/reports" element={<Reports/>} />
                    <Route  path="/configuration" element={<Configuration/>} />
                </Routes>
            </Router>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    height: 100%;
`;