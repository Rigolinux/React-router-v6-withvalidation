import React from 'react';
import {resetUser, UserKey} from "../../redux/state/user";
import { ClearLocalStorage} from "../../utilities/localStorage.utility";
import {useNavigate} from "react-router-dom";
import {PublicRoutes} from "../../models";
import {useDispatch} from "react-redux";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
         dispatch(resetUser());
         ClearLocalStorage(UserKey);
         navigate(PublicRoutes.LOGIN,{replace:true});
     }
    return <button onClick={logout}>Logout</button>;

};

export default Logout;
