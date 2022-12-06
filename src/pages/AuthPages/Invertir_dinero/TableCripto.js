import React from "react"
import './Tablecripto.css'
import {useNavigate} from "react-router-dom";


function TableCripto ({cotizaciones}) {
    const navigate = useNavigate();


    return (
        <div className="table_size">
            <div className="table_firstrow">
                <h2 className="column">Nombre/Symbol</h2>
                <h2 className="column">Precio</h2>
                <h2 className="column lastcolumn">Comprar</h2>
            </div>
            {cotizaciones.map(cotizacion => {
                return (<div className="table_row">
                    <h2 className="column">{cotizacion.symbol}</h2>
                    <h2 className="column">${cotizacion.price}</h2>
                    <div className="column lastcolumn"><button  onClick={() => navigate("/perfil/compraraccion/"+cotizacion.symbol)}>Comprar</button></div>
                </div>)
            })}
        </div>
    )
}

export default TableCripto
