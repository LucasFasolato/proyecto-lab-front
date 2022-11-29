import React from "react"
import './Tablecripto.css'
function TableCripto () {
return (
    <div className="table_size">
        <div className="table_firstrow">
            <h2 className="column">Name/Symbol</h2>
            <h2 className="column">Price</h2>
            <h2 className="column lastcolumn">Variation lt</h2>
        </div>
        <div className="table_row">
            <h2 className="column">Bitcoin</h2>
            <h2 className="column">14.576</h2>
            <div className="column lastcolumn"><button>Comprar</button></div>
        </div>
        <div className="table_row">
            <h2 className="column">Ethereum</h2>
            <h2 className="column">2.658</h2>
            <div className="column lastcolumn"><button>Comprar</button></div>
        </div>
    </div>
)
}

export default TableCripto