import React, {useEffect, useState} from  "react"
import  './styles/Card.css'
import { ValorCripto } from "./ValorCripto";


export default function Formularios(){

    
    const[nombre,setNombre]=useState("");
    const[mail,setMail]=useState("");
    const[alerta,setAlerta]=useState("");
    const[moneda,setMoneda]=useState("");
    const [valor,setValor] = useState([]);


useEffect(  () => {
getCripto();
}, []  )


const getCripto = async() => {  
 const res= await ValorCripto.get('https://xlebo5qq46.execute-api.us-east-2.amazonaws.com/cripto/cripto?cripto=BTC')
    setValor(res.data.rate);
}


return(

<div className="fondo">

<form className="card fondo">

<label className="nombrelabel" htmlFor="">Nombre</label>
<input  className="nombreform"
type="text"
 id="nombre" 
name="nombre" 
value={nombre}
onChange={(e)=> setNombre(e.target.value)}
/>

<br></br>
<br></br>

<label className="nombrelabel" htmlFor="">Mail</label>
<input  className="nombreform"
type="text"
 id="mail" 
name="mail" 
value={mail}
onChange={(e)=> setMail(e.target.value)}
/>
<br></br>
<div className="btn ">
<p className="nombrelabel">Elegir Moneda</p>
<select name="moneda" onChange={(e)=> setMoneda(e.target.value)} defaultValue="" className="btn btn-primary">
    <option value="">----</option>
    <option value="bit">Bitcoin</option>
    <option value="eth">Etherium</option>
    <option value="sol">Solana</option>
</select>
</div>

<br></br>
<div className="fondoradio">
<p className="nombrelabel">Elegir alerta</p>
<label htmlFor=""  className="nombreradio">1-hs</label>
<input type="radio" id="1hs" name="alerta" value="1hs"  className="nombreradio" onChange={(e)=> setAlerta(e.target.value)}/>
<label htmlFor=""  className="nombreradio">1-día</label>
<input type="radio" id="1dia" name="alerta" value="1dia" className="nombreradio" onChange={(e)=> setAlerta(e.target.value)}/>
<label htmlFor=""  className="nombreradio">1-sem</label>
<input type="radio" id="1sem" name="alerta" value="1sem" className="nombreradio" onChange={(e)=> setAlerta(e.target.value)}/>
<label htmlFor=""  className="nombreradio">Cambios</label>
<input type="radio" id="cambios" name="alerta" value="cambios" className="nombreradio" onChange={(e)=> setAlerta(e.target.value)}/>

</div>

<div>

</div>
</form>
</div>

)
}
