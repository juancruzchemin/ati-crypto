
import  React, {Component}  from 'react'
import  './styles/Card.css'
import axios from 'axios'
class ValorCripto extends Component{
    state ={criptodata:[]}
        componentDidMount(moneda){
            axios.get('https://xlebo5qq46.execute-api.us-east-2.amazonaws.com/cripto/cripto?cripto=BTC')
            .then(res=> { console.log(res.data)
            const criptodata= res.data;
            this.setState({
                criptodata 
            })
            })
            .catch(console.log)
           
        } 
        render(){
            const {criptodata} = this.state; //ocupando destructuracion
            return(
    
                <div>
                    <li>
                   {criptodata.rate} </li>
               </div>
               
         )
        
    
        }
    }
    export default ValorCripto;