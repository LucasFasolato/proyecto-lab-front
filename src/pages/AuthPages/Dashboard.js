import React from 'react';
import './Dashboard.css';

function Dashboard(props) {
    return (
        <div className='dashboard_size'>
            <div className='dashboard_content'>
                <div className='dashboard_column-1'>
                    <section className='dashboard_menu'>
                        <div className='dashboard_menu-link'>
                            <a className='dashboard_menu-a'>
                                <h2 className='dashboard_menu-h2'>Inicio</h2>
                            </a>
                        </div>
                        <div className='dashboard_menu-link'>
                            <a className='dashboard_menu-a'>
                                <h2 className='dashboard_menu-h2'>Tu perfil</h2>
                            </a>
                        </div>
                        <div className='dashboard_menu-link'>
                            <a className='dashboard_menu-a'>
                                <h2 className='dashboard_menu-h2'>Ayuda</h2>
                            </a>
                        </div>
                        <div className='dashboard_menu-link'>
                            <a className='dashboard_menu-a'>
                                <h2 className='dashboard_menu-h2'>Tu dinero</h2>
                            </a>
                        </div>
                        <div className='dashboard_menu-link'>
                            <a className='dashboard_menu-a'>
                                <h2 className='dashboard_menu-h2'>Actividad</h2>
                            </a>
                        </div>
                        <div className='dashboard_menu-link'>
                            <a className='dashboard_menu-a'>
                                <h2 className='dashboard_menu-h2'>Enviar dinero</h2>
                            </a>
                        </div>
                        <div className='dashboard_menu-link'>
                            <a className='dashboard_menu-a'>
                                <h2 className='dashboard_menu-h2'>Salir</h2>
                            </a>
                        </div>
                    </section>
                </div>
                <div className='dashboard_column-2'>
                    <section className='dashboard_column-2-content'>
                        <section className='column-2-left'>
                            <section className='column-2-left-fondos'>
                                <div className='column-2-left-fondos-info'>
                                    <div className='column-2-left-fondos-data'>
                                        <p className='column-2-left-fondos-data-p'>Dinero disponible</p>
                                        <h1 className='column-2-left-fondos-data-h1'>$ 7.105,56</h1>
                                    </div>
                                    <hr/>
                                    <div className='column-2-left-fondos-inv'>
                                        <div className='column-2-left-fondos-inv-left'>
                                            <p className='column-2-left-fondos-inv-p'>Invertido</p>
                                        </div>
                                        <div className='column-2-left-fondos-inv-right'>
                                            <p className='column-2-left-fondos-inv-p'>$ 7.105,56</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <hr/>
                                <div className='column-2-left-fondos-bttns'>
                                    <div className='column-2-left-fondos-bttns-content'>
                                        <div className='column-2-left-fondos-bttns-size'>
                                            <button className='column-2-left-fondos-bttn'>Ingresar dinero</button>
                                        </div>
                                        <div className='column-2-left-fondos-bttns-size'>
                                            <button className='column-2-left-fondos-bttn'>Transferir dinero</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='column-2-left-reportesaldo'>
                                <div  className='column-2-left-reportesaldo-content'>
                                    <div className='column-2-left-reportesaldo-left'>
                                        <div className='column-2-left-reportesaldo-left-img'/>
                                        <p className='column-2-left-reportesaldo-left-p'>Reporte saldo al 31/12</p>
                                    </div>
                                    <div className='column-2-left-reportesaldo-right'>
                                        <button className='column-2-left-reportesaldo-right-bttn'>Pedir dinero</button>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className='column-2-right'>
                            <section className='column-2-right-actividad'>
                                <div className='column-2-right-actividad-title'>
                                    <h2 className='column-2-right-actividad-h2'>Tu actividad</h2>
                                </div>
                                <hr/>
                                <div className='column-2-right-actividad-searchbar'>
                                    <input className='column-2-right-actividad-input' type='text' placeholder='Buscar'/>
                                </div>
                                <div className='column-2-right-actividad-li'>
                                    <div className='column-2-right-actividad-li-img'>
                                        <div className='column-2-right-actividad-li-img-size'></div>
                                    </div>
                                    <div className='column-2-right-actividad-li-datos'>
                                        <h3 className='column-2-right-actividad-li-datos-h3'>Te transfirieron dinero</h3>
                                    </div>
                                    <div className='column-2-right-actividad-li-valortransf'>
                                        <div className='column-2-right-actividad-li-valortransf-monto'>
                                            <h3 className='column-2-right-actividad-li-valortransf-h3'>$ 700,00</h3>
                                        </div>
                                        <div className='column-2-right-actividad-li-valortransf-dia'>
                                            <h4 className='column-2-right-actividad-li-valortransf-h4'>Lunes</h4>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className='column-2-right-actividad-li'>
                                    <div className='column-2-right-actividad-li-img'>
                                        <div className='column-2-right-actividad-li-img-size'></div>
                                    </div>
                                    <div className='column-2-right-actividad-li-datos'>
                                        <h3 className='column-2-right-actividad-li-datos-h3'>Te transfirieron dinero</h3>
                                    </div>
                                    <div className='column-2-right-actividad-li-valortransf'>
                                        <div className='column-2-right-actividad-li-valortransf-monto'>
                                            <h3 className='column-2-right-actividad-li-valortransf-h3'>$ 1200,00</h3>
                                        </div>
                                        <div className='column-2-right-actividad-li-valortransf-dia'>
                                            <h4 className='column-2-right-actividad-li-valortransf-h4'>Jueves</h4>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
                <hr/>
            </div>
            
            <hr/>
            <div className='dashboard_terms'>
                <p className='dashboard_terms-p'>
                    <span>Lucas Daniel Fasolato · Último ingreso: 6 abr 2022 · 12:17 hs.</span>
                    <br/>
                    <span>Mercado Pago ofrece servicios de pago y no está autorizado por el Banco Central a operar como entidad financiera. </span>
                    <span>Los fondos acreditados en cuentas de pago no constituyen depósitos en una entidad financiera ni están garantizados conforme legislación aplicable a depósitos en entidades financieras.</span>
                </p>
            </div>
        </div>
    );
}

export default Dashboard;
