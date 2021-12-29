import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App = function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
    );
};

export default App;
