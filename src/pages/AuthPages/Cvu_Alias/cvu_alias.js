import React from 'react'
import './cvu_alias.css'
import Dashboard_menu from '../../../components/Dashboard_menu/dashboard_menu';
import {Link, useNavigate} from "react-router-dom";

function Cvu_Alias() {
    const navigate = useNavigate();
  return (
    <div className='cvu_alias_size'>
        <div className='cvu_alias_content'>
            <div className='cvu_alias_column-1'>
                <Dashboard_menu/>
            </div>
            <div className='cvu_alias_column-2'>
                <section className='cvu_alias_column-2-content'>
                    <section className='cvu_alias_column-2-cvu'>
                        <div className='cvu_alias_column-2-cvu-info'>
                            <div className='cvu_alias_column-2-cvu-title'>
                                <h2 className='cvu_alias_column-2-cvu-h2'>CVU</h2>
                            </div>
                            <div className='cvu_alias_column-2-cvu-number'>
                                <h3 className='cvu_alias_column-2-cvu-h3'>0045678493484565400</h3>
                            </div>
                        </div>
                        <div className='cvu_alias_column-2-cvu-arrow'>
                            <button className='cvu_alias_column-2-cvu-arrow-size'>COPIAR</button>
                        </div>
                    </section>

                    <section className='cvu_alias_column-2-alias'>
                        <div className='cvu_alias_column-2-alias-content'>
                           <div className='cvu_alias_column-2-alias-info'>
                                <div className='cvu_alias_column-2-alias-title'>
                                    <h2 className='cvu_alias_column-2-alias-h2'>Alias</h2>
                                </div>
                                <div className='cvu_alias_column-2-alias-name'>
                                    <h3 className='cvu_alias_column-2-alias-h3'>LucasFasolato</h3>
                                </div>
                            </div>
                            <div className='cvu_alias_column-2-alias-arrow'>
                                <button className='cvu_alias_column-2-alias-arrow-size'>COPIAR</button>
                            </div> 
                        </div>
                        <div className='cvu_alias_column-2-alias-modificar'>
                            <button className='cvu_alias_column-2-alias-modificar-bttn'>Modificar mi alias</button>
                            <div className='perfil_column-2-alias-modificar-arrow'>
                                <button className='perfil_column-2-alias-modificar-arrow-size'>&gt;</button>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Cvu_Alias