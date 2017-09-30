import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Layouts
import AppLayout from '../layouts/AppLayout';

class App extends Component {
    render() {
        return (
            <Router>
                <AppLayout />
            </Router>
        );
    }
}

export default App;
