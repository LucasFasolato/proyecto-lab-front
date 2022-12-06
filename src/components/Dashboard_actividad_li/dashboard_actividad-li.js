import React from 'react'
import './dashboard_actividad_li.css'
import {formatDate, makeAvatarUrl} from "../../utils/helpers";

function Dashboard_actividad_li({cantidad, mailReceptor, mailEmisor, tipo, fecha, avatarEmisor, avatarReceptor}) {
    const profilePicOwner = () => {
        if (tipo == "emisor") {
            return mailReceptor
        } else {
            return mailEmisor
        }
    }

  return (
    <div className='dashboard_actividad_li-size'>
        <div className='dashboard_actividad_li-img'>

            <img src={tipo === "emisor" ? avatarReceptor : avatarEmisor} className='dashboard_actividad_li-img-size'/>
        </div>
        <div className='dashboard_actividad_li-datos'>
            <h3 className='dashboard_actividad_li-datos-h3'>
                {tipo == "emisor" && <>Transferiste a {mailReceptor}</>}
                {tipo == "receptor" && <>Recibiste de {mailEmisor}</>}
            </h3>
        </div>
        <div className='dashboard_actividad_li-valortransf'>
            <div className='dashboard_actividad_li-valortransf-monto'>
                <h3 className='dashboard_actividad_li-valortransf-h3'>$ {cantidad}</h3>
            </div>
            <div className='dashboard_actividad_li-valortransf-dia'>
                <h4 className='dashboard_actividad_li-valortransf-h4'>{formatDate(fecha)}</h4>
            </div>
        </div>
    </div>
  )
}

export default Dashboard_actividad_li
