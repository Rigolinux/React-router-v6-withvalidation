import './App.css'


import {BrowserRouter, Navigate, Route} from "react-router-dom";
import {PrivateRoutes, PublicRoutes, Roles} from "./models";
import AuthGuard from "./guards/auth.guard";
import RoutesWithNotFoundUtility from "./utilities/RoutesWithNotFound.utility";
import {Provider} from "react-redux";
import store from "./redux/store";
import {lazy, Suspense} from "react";
import RoleGuard from "./guards/rol.guard";
import Dashboard from "./pages/Private/Dashboard/Dashboard";
import Logout from "./components/Logout/Logout";

const Login= lazy(() => import('./pages/Login/Login'));
const Private= lazy(() => import('./pages/Private/Private'));

function App() {

    //video en una hora 1 uwu del recurso https://www.youtube.com/watch?v=UVsX7A2wfLo
    return (
        <div className="App">
            <Suspense fallback={<div>cargando</div>}>
                <Provider store={store}>
            <BrowserRouter>
                <RoutesWithNotFoundUtility>
                    <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
                    <Route path={PublicRoutes.LOGIN} element={<Login/>}/>

                    <Route element={<AuthGuard privateValidation={true}/>}>
                        //outlet
                        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>}/>
                    </Route>
                    <Route element={<RoleGuard rol={Roles.ADMIN} />} >
                     <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                    </Route>
                </RoutesWithNotFoundUtility>
                <Logout/>
            </BrowserRouter>

                </Provider>
            </Suspense>

        </div>
    )
}

export default App
