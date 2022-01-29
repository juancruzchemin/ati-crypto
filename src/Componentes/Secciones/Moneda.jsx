
import Crypto from "../Crypto";
import React,  {useEffect, useState} from  "react"
import { ValorCripto } from "../ValorCripto";


const Moneda = () => {

  const [valor,setValor] = useState([]);


  useEffect(  () => {
  getCripto();
  }, []  )
  
  
  const getCripto = async() => {  
   const res= await ValorCripto.get('https://pokeapi.co/api/v2/pokemon')
      setValor(res.data.results);
      console.log(res.data.results);
  }
  return (
    <>
 
      <div className="container">
        <Crypto />
    
      </div>

      <tbody className="card">
        {
         

          valor.map(val=>(
            <tr className="nombreform" key={val.name}>
            <td>{val.name}</td>
        </tr>
          ))
        }
   
</tbody>
    </>
  );
};

export default Moneda;
