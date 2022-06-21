import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { MoralisProvider } from "react-moralis";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Configurestore from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { history } from './helper';
import { Router } from "react-router-dom";


const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const { store, persistor } = Configurestore();

const CustomRouter = ({ history, ...props }) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            {...props}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <CustomRouter history={history}>
                    <Application />
                    <ToastContainer theme='colored' />
                </CustomRouter>
            </PersistGate>
        </Provider>
    )
}

const Application = () => (
    <App />
)

ReactDOM.render(
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <Root />
    </MoralisProvider>, document.getElementById('root')
);
