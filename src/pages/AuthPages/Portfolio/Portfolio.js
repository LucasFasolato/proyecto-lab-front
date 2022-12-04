import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import {httpGet} from "../../../utils/httpFunctions";
import './Portfolio.css'
import './../../../../node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {CircleLoader, ClipLoader, PropagateLoader, PuffLoader, BeatLoader} from "react-spinners";

function Portfolio({token}) {
    let [color, setColor] = useState("#3b6ce1");
    const [Portfolio, setPortfolio] = useState(false)
    const [cargandoPortfolio, setCargandoPortfolio] = useState(false)
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);
    const [cantidadPagina, setCantidadPagina] = useState(7);
    const [nroPagina, setNroPagina] = useState(0);

    useEffect(() => {
      setCargandoUser(true)
      httpGet("auth/users/me").then(res => {
          setCargandoUser(false);
          setUser(res)
          console.log(res)
      })
    }, [])

    useEffect(() => {
        setCargandoPortfolio(true)
        httpGet(`auth/instrumentos/portfolio?nroPag=${nroPagina}&pageSize=${cantidadPagina}`).then(res => {
            setCargandoPortfolio(false);
            setPortfolio(res)
            console.log(res)
        })
    }, [])

    function showPortfolio () {
      return (
          <>
          {cargandoPortfolio ?
              <div className="dashboard-porterencias-loading">
                  <BeatLoader color={color} loading={cargandoPortfolio} size={10}/>
              </div> :
              Portfolio &&
              Portfolio.map(port => {
                  if(port.result != 0) {
                    if(port.result > 0) {
                      return (
                        <Tr>
                          <Td>{port.symbol}</Td>
                          <Td>{port.actualQuaintity}</Td>
                          <Td>{port.avgBuyingPrice}</Td>
                          <Td>{port.currentPrice}</Td>
                          <Td className="colorgreen">{port.result}</Td>
                          <Td><button>Vender</button></Td>
                        </Tr>
                      )
                    }
                    else {
                      return (
                        <Tr>
                          <Td>{port.symbol}</Td>
                          <Td>{port.actualQuaintity}</Td>
                          <Td>{port.avgBuyingPrice}</Td>
                          <Td>{port.currentPrice}</Td>
                          <Td className="colorred">{port.result}</Td>
                          <Td><button>Vender</button></Td>
                        </Tr>
                      )
                    }
                  }
                  return (
                    <Tr>
                      <Td>{port.symbol}</Td>
                      <Td>{port.actualQuaintity}</Td>
                      <Td>{port.avgBuyingPrice}</Td>
                      <Td>{port.currentPrice}</Td>
                      <Td className="colorblack">{port.result}</Td>
                      <Td><button>Vender</button></Td>
                    </Tr>
                  )
              })
          }
          </>
        )
    }
    return (
        <div className="responsiveTable bgcolor">
            <Table className="table">
              <Thead>
                <Tr className="tr"> 
                  <Th>Instrumento</Th>
                  <Th>Cantidad</Th>
                  <Th>Precio promedio compra</Th>
                  <Th>Precio actual</Th>
                  <Th>Resultado</Th>
                  <Th>Vender</Th>
                </Tr>
              </Thead>
              <Tbody>
                {showPortfolio()}
              </Tbody>
            </Table>
        </div>
            
          );
    }

export default Portfolio