import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyRoute from './PrivateOutlet';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

const Router = function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MyRoute>
                        <Login />
                    </MyRoute>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route
                path="*"
                element={
                    <MyRoute>
                        <Page404 />
                    </MyRoute>
                }
            />
        </Routes>
    );
};

export default Router;
