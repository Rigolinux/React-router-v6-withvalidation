import React, {lazy} from 'react';
import {BrowserRouter, Navigate, Route} from "react-router-dom";
import {PrivateRoutes} from "../../models";
import RoutesWithNotFoundUtility from "../../utilities/RoutesWithNotFound.utility";



const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home =lazy(() => import("./Home/Home"));

const Private = () => {
    return (
        <RoutesWithNotFoundUtility>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>}/>
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>}/>
            <Route path={PrivateRoutes.HOME} element={<Home />} />
        </RoutesWithNotFoundUtility>


    );
};

export default Private;
