import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

// Api
import { getClubId } from './store/api';

// Components
import Root from './containers/Root';

// Store
import configureStore from './store/configureStore';

// Stylesheet
import './assets/scss/main.scss';

const history = createHistory();
const store = configureStore({user: {clubId: getClubId()}}, history);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component history={history} store={store} />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./containers/Root', () => render(Root));
}

(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
    }
})();
