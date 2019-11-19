import React, { Component } from 'react';

// Screens
import ErrorScreen from '../screens/ErrorScreen';

class ErrorBoundary extends Component {
    state = {hasError: false};

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <ErrorScreen/>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
