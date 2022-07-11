import React from 'react';
import {Navigate, useLocation} from "react-router-dom";

function RequireAuth({children}) {
    let user = localStorage.getItem('user');
    const location = useLocation(); // <-- get current location being accessed

    return user
        ? children
        : (
            <Navigate
                to={'/login'}
                state={{ from: location }} // <-- pass in route state
                replace
            />
        );
}


export default RequireAuth;
