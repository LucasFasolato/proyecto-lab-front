import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import {httpGet} from "../../../utils/httpFunctions";
import './Portfolio.css'
import './../../../../node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {CircleLoader, ClipLoader, PropagateLoader, PuffLoader, BeatLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";

function Portfolio({token}) {
    let [total, setTotal] = useState(0);
    const navigate = useNavigate()
    let [color, setColor] = useState("#3b6ce1");
    const [Portfolio, setPortfolio] = useState(false)
    const [cargandoPortfolio, setCargandoPortfolio] = useState(false)
    const [user, setUser] = useState({});
    const [cargandoUser, setCargandoUser] = useState(false);
    const [cantidadPagina, setCantidadPagina] = useState(70);
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
            calcularTotal(res)
        })
    }, [])

    function calcularTotal (res) {
        let total = 0;
        res.forEach(port => {{
            let intcant = parseFloat(port.actualQuaintity,10);
            let intprecio = parseFloat(port.currentPrice,10);
            if(port.result) {
                total += intprecio * intcant

            }
            console.log(total)
        }})
        setTotal(total)
    }



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
                          <Td>${port.actualQuaintity}</Td>
                          <Td>${port.avgBuyingPrice}</Td>
                          <Td>${port.currentPrice}</Td>
                          <Td className="colorgreen">${port.result}</Td>
                          <Td><button onClick={() => navigate("/perfil/venderaccion/" + port.symbol + "/" + port.actualQuaintity) }>Vender</button></Td>
                        </Tr>
                      )
                    }
                    else {
                      return (
                        <Tr>
                          <Td>{port.symbol}</Td>
                          <Td>{port.actualQuaintity}</Td>
                          <Td>${port.avgBuyingPrice}</Td>
                          <Td>${port.currentPrice}</Td>
                          <Td className="colorred">${port.result}</Td>
                          <Td><button onClick={() => navigate("/perfil/venderaccion/" + port.symbol + "/" + port.actualQuaintity) }>Vender</button></Td>
                        </Tr>
                      )
                    }
                  }
                  return (
                    <Tr>
                      <Td>{port.symbol}</Td>
                      <Td>{port.actualQuaintity}</Td>
                      <Td>${port.avgBuyingPrice}</Td>
                      <Td>${port.currentPrice}</Td>
                      <Td className="colorblack">${port.result}</Td>
                      <Td><button>Vender</button></Td>
                    </Tr>
                  )
              })
          }
          </>
        )
    }

    if (cargandoPortfolio) {
        return (
                <div className="responsiveTable bgcolor">
                    <div className="dashboard-porterencias-loading">
                        <BeatLoader color={color} loading={cargandoPortfolio} size={10}/>
                    </div>
                </div>

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
                  <Tr>
                      <Th> </Th>
                      <Th> </Th>
                      <Th> </Th>

                      <Th>TOTAL TENENCIAS</Th>
                      <Td>${total.toFixed(2)}</Td>
                      <Th> </Th>
                  </Tr>

                      
              </Tbody>

            </Table>
        </div>
            
          );
    }

export default Portfolio
