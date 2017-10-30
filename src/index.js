import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import configureStore from './redux/store';
import App from './containers/App';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);