import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Root from './containers/Root';

// Scripts
import './scrollbarWidth';
import * as serviceWorker from './serviceWorker';

// Stylesheet
import './assets/scss/main.scss';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
