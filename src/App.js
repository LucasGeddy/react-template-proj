import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App = function App() {
    return (
        <BrowserRouter>
            <Header />
            <Router />
            <GlobalStyles />
        </BrowserRouter>
    );
};

export default App;
