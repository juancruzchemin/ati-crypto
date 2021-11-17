import React, {useState} from  "react"
export default function Formularios(){

    const[nombre,setNombre]=useState("");
    const[mail,setMail]=useState("");
    const[alerta,setAlerta]=useState("");
    const[moneda,setMoneda]=useState("");

return(



<form className="card">

<label htmlFor="">Nombre</label>
<input 
type="text"
 id="nombre" 
name="nombre" 
value={nombre}
onChange={(e)=> setNombre(e.target.value)}
/>
<br></br>
<br></br>
<label htmlFor="">Mail</label>
<input 
type="text"
 id="mail" 
name="mail" 
value={mail}
onChange={(e)=> setMail(e.target.value)}
/>
<br></br>
<div className="btn ">
<p>Elegir Moneda</p>
<select name="moneda" onChange={(e)=> setMoneda(e.target.value)} defaultValue="" className="btn btn-primary">
    <option value="">----</option>
    <option value="bit">Bitcoin</option>
    <option value="eth">Etherium</option>
    <option value="sol">Solana</option>
</select>
</div>

<br></br>
<div className="btn">
<p>Elegir alerta</p>
<label htmlFor="" className>1-hs</label>
<input type="radio" id="1hs" name="alerta" value="1hs" onChange={(e)=> setAlerta(e.target.value)}/>
<label htmlFor="">1-día</label>
<input type="radio" id="1dia" name="alerta" value="1dia" onChange={(e)=> setAlerta(e.target.value)}/>
<label htmlFor="">1-sem</label>
<input type="radio" id="1sem" name="alerta" value="1sem" onChange={(e)=> setAlerta(e.target.value)}/>
<label htmlFor="">Cambios</label>
<input type="radio" id="cambios" name="alerta" value="cambios" onChange={(e)=> setAlerta(e.target.value)}/>
</div>

</form>


)
}
