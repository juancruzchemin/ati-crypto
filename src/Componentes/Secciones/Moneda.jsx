
import Crypto from "../Crypto";
import React,  {useEffect, useState} from  "react"
import { ValorCripto } from "../ValorCripto";
import Desplegable from "../Desplegable";


const Moneda = () => {

  const [valor,setValor] = useState([]);


  useEffect(  () => {
  getCripto();
 
  }, []  )
  
  
  const getCripto = async() => {  
   const res= await ValorCripto.get('https://xlebo5qq46.execute-api.us-east-2.amazonaws.com/cripto/cripto?cripto=BTC')
      setValor(res.data);
      console.log(res.data.rate);
  }


  




  
  return (
    <>
 
      <div className="container">
        <Crypto />
       
        <div>
        {valor.rate}
        </div>
    
       
      </div>

      <tbody className="card">
 
   
</tbody>
    </>
  );
};

export default Moneda;
