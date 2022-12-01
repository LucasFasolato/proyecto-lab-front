import React from "react"
import './Tablecripto.css'
function TableCripto ({cotizaciones}) {
return (
    <div className="table_size">
        <div className="table_firstrow">
            <h2 className="column">Name/Symbol</h2>
            <h2 className="column">Price</h2>
            <h2 className="column lastcolumn">Variation lt</h2>
        </div>
        {cotizaciones.map(cotizacion => {
            return (<div className="table_row">
                <h2 className="column">{cotizacion.symbol}</h2>
                <h2 className="column">{cotizacion.price}</h2>
                <div className="column lastcolumn"><button>Comprar</button></div>
            </div>)
        })}
    </div>
)
}

export default TableCripto