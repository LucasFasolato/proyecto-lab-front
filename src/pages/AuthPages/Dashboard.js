import React from 'react';
import {useNavigate} from "react-router-dom";
import {logout} from "../../utils/httpFunctions";

function Dashboard(props) {
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div>
            <div>HELLO</div>
            <button onClick={handleLogout}> LOG OUT</button>
        </div>
    );
}

export default Dashboard;
