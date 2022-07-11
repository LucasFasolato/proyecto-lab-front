import React from 'react';
import {logout} from "../../utils/httpFunctions";
import {useNavigate} from "react-router-dom";

function AuthNavbar(props) {
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <div>
            <button onClick={handleLogout}> LOG OUT!!</button>
        </div>
    );
}

export default AuthNavbar;
