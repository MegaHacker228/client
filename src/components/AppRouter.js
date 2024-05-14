import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRouts, publicRouts } from '../routes';
import { REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const';
import { Context } from '../index';

const AppRouter = () => {
    const { user } = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && AuthRouts.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRouts.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;