import React from 'react';
import Dashboard_menu from "../Dashboard_menu/dashboard_menu";
import {Outlet} from "react-router-dom";
import '../../pages/AuthPages/Cvu_Alias/cvu_alias.css'

function PerfilLayout({isLoggedIn, setIsLoggedIn}) {
    return (
        <div className='cvu_alias_size'>
            <div className='cvu_alias_content'>
                <div className='cvu_alias_column-1'>
                    <Dashboard_menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default PerfilLayout;
