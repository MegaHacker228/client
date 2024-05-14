import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import CarPage from "./pages/CarPage";
import Main from "./pages/Main"

import { ADMIN_ROUTE, BASKET_ROUTE, CAR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, MAIN_ROUTE } from "./utils/const";


export const AuthRouts = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRouts = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },    
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CAR_ROUTE + '/:id',
        Component: CarPage
    }
]