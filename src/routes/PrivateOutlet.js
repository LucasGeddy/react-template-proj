import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateOutlet = function PrivateOutlet({ isClosed, ...rest }) {
    const isLoggedIn = false;

    if (isClosed && !isLoggedIn) {
        return (
            <Navigate
                to={{
                    pathname: '/login',
                    state: { prevPath: rest.location.pathname },
                }}
            />
        );
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Outlet />;
};

PrivateOutlet.defaultProps = {
    isClosed: false,
};

PrivateOutlet.propTypes = {
    isClosed: PropTypes.bool,
};

export default PrivateOutlet;
