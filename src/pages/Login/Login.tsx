import {getMorty} from "../../services";
import {useDispatch} from "react-redux";
import {createUser, resetUser, UserKey} from "../../redux/state/user";
import {useNavigate} from "react-router-dom";
import {PrivateRoutes, PublicRoutes, Roles} from "../../models";
import {useEffect} from "react";
import {ClearLocalStorage} from "../../utilities/localStorage.utility";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(resetUser());
         ClearLocalStorage(UserKey);
         navigate(`/${PublicRoutes.LOGIN}`,{replace:true});
    },[]);
    const login = async () => {
        try {
            const result = await getMorty();
            dispatch(createUser({...result, rol: Roles.ADMIN }));
            navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
        }
        catch (error){
            console.log(error);
        }
    }
    return (
        <div>
            <h2>Este es Login</h2>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
