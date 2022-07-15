import React from 'react'
import './perfil.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {Link, useNavigate} from "react-router-dom";

function Perfil() {
    const navigate = useNavigate();
  return (
    <div className='perfil_size'>
        <div className='perfil_content'>
            <div className='perfil_column-1'>
                <Dashboard_menu/>
            </div>
            <div className='perfil_column-2'>
                <section className='perfil_column-2-content'>
                    <section className='perfil_column-2-user'>
                        <div className='perfil_column-2-user-img'>
                            <div className='perfil_column-2-user-img-size'/>
                        </div>
                        <div className='perfil_column-2-user-info'>
                            <div className='perfil_column-2-user-name'>
                                <h2 className='perfil_column-2-user-h2'>Lucas Daniel Fasolato</h2>
                            </div>
                            <div className='perfil_column-2-user-register'>
                                <h3 className='perfil_column-2-user-h3'>Usuario creado el día 14/07/2022</h3>
                            </div>
                        </div>
                    </section>

                    <section className='perfil_column-2-menu'>
                        <div className='perfil_column-2-menu-bttn'>
                            <button className='perfil_column-2-menu-bttn-size' onClick={() => navigate("/perfil/cvu")}>
                                CVU y Alias
                            </button>
                        </div>
                        <div className='perfil_column-2-menu-li'>
                            <div className='perfil_column-2-menu-li-img'>
                                <div className='perfil_column-2-menu-li-img-size'/>
                            </div>
                            <div className='perfil_column-2-menu-li-info'>
                                <div className='perfil_column-2-li-title'>
                                    <h2 className='perfil_column-2-li-h2'>Tus datos</h2>
                                </div>
                                <div className='perfil_column-2-li-desc'>
                                    <h3 className='perfil_column-2-li-h3'>Gestioná tus datos personales.</h3>
                                </div>
                            </div>
                            <div className='perfil_column-2-menu-li-arrow'>
                                <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                            </div>
                        </div>
                        <hr/>
                        <div className='perfil_column-2-menu-li'>
                            <div className='perfil_column-2-menu-li-img'>
                                <div className='perfil_column-2-menu-li-img-size'/>
                            </div>
                            <div className='perfil_column-2-menu-li-info'>
                                <div className='perfil_column-2-li-title'>
                                    <h2 className='perfil_column-2-li-h2'>Seguridad</h2>
                                </div>
                                <div className='perfil_column-2-li-desc'>
                                    <h3 className='perfil_column-2-li-h3'>Configurá la seguridad de tu cuenta.</h3>
                                </div>
                            </div>
                            <div className='perfil_column-2-menu-li-arrow'>
                                <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                            </div>
                        </div>
                        <hr/>
                        <div className='perfil_column-2-menu-li'>
                            <div className='perfil_column-2-menu-li-img'>
                                <div className='perfil_column-2-menu-li-img-size'/>
                            </div>
                            <div className='perfil_column-2-menu-li-info'>
                                <div className='perfil_column-2-li-title'>
                                    <h2 className='perfil_column-2-li-h2'>Tus tarjetas</h2>
                                </div>
                                <div className='perfil_column-2-li-desc'>
                                    <h3 className='perfil_column-2-li-h3'>Gestioná tus tarjetas.</h3>
                                </div>
                            </div>
                            <div className='perfil_column-2-menu-li-arrow'>
                                <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                            </div>
                        </div>
                        <hr/>
                        <div className='perfil_column-2-menu-li'>
                            <div className='perfil_column-2-menu-li-img'>
                                <div className='perfil_column-2-menu-li-img-size'/>
                            </div>
                            <div className='perfil_column-2-menu-li-info'>
                                <div className='perfil_column-2-li-title'>
                                    <h2 className='perfil_column-2-li-h2'>Privacidad</h2>
                                </div>
                                <div className='perfil_column-2-li-desc'>
                                    <h3 className='perfil_column-2-li-h3'>Gestioná el uso de tu información personal.</h3>
                                </div>
                            </div>
                            <div className='perfil_column-2-menu-li-arrow'>
                                <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                            </div>
                        </div>
                        <hr/>
                        <div className='perfil_column-2-menu-li'>
                            <div className='perfil_column-2-menu-li-img'>
                                <div className='perfil_column-2-menu-li-img-size'/>
                            </div>
                            <div className='perfil_column-2-menu-li-info'>
                                <div className='perfil_column-2-li-title'>
                                    <h2 className='perfil_column-2-li-h2'>Comunicaciones</h2>
                                </div>
                                <div className='perfil_column-2-li-desc'>
                                    <h3 className='perfil_column-2-li-h3'>Elegí que tipo de información queres recibir.</h3>
                                </div>
                            </div>
                            <div className='perfil_column-2-menu-li-arrow'>
                                <button className='perfil_column-2-menu-li-arrow-size'>&gt;</button>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Perfil