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

// Mixpanel
import mixpanel from 'mixpanel-browser';
import MixpanelProvider from 'react-mixpanel';

// Stylesheet
import './assets/scss/main.scss';

mixpanel.init('0f22e3afaf2b537e2fb1b19a4276de60');

const history = createHistory();
const store = configureStore({user: {clubId: getClubId()}}, history);

const render = Component => {
    ReactDOM.render(
        <MixpanelProvider mixpanel={mixpanel}>
            <AppContainer>
                <Component history={history} store={store} />
            </AppContainer>
        </MixpanelProvider>,
        document.getElementById('root')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./containers/Root', () => render(Root));
}
