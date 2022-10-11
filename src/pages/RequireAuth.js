import React from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function RequireAuth({children}) {
    const {isAuthenticated} = useAuth0();
    const { loginWithRedirect } = useAuth0();
    let user = localStorage.getItem('user');
    const location = useLocation(); // <-- get current location being accessed

    return !isAuthenticated && loginWithRedirect()
}


export default RequireAuth;
