import React from 'react'
import './dashboard_actividad_li.css'

function Dashboard_actividad_li({emitida, cantidad, cbuReceptor, cbuEmisor}) {
  return (
    <div className='dashboard_actividad_li-size'>
        <div className='dashboard_actividad_li-img'>
            <div className='dashboard_actividad_li-img-size'></div>
        </div>
        <div className='dashboard_actividad_li-datos'>
            <h3 className='dashboard_actividad_li-datos-h3'>Transferista a {cbuReceptor}</h3>
        </div>
        <div className='dashboard_actividad_li-valortransf'>
            <div className='dashboard_actividad_li-valortransf-monto'>
                <h3 className='dashboard_actividad_li-valortransf-h3'>$ {cantidad}</h3>
            </div>
            <div className='dashboard_actividad_li-valortransf-dia'>
                <h4 className='dashboard_actividad_li-valortransf-h4'>Lunes</h4>
            </div>
        </div>
    </div>
  )
}

export default Dashboard_actividad_li
