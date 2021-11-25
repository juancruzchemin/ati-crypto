
import  React, {Component}  from 'react'
import  './styles/Card.css'
import axios from 'axios'
class ValorCripto extends Component{
    state ={criptodata:[]}
        componentDidMount(){
            axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(result=> { console.log(result.data.results)
            const criptodata= result.data.results;
            this.setState({
                criptodata 
            })
            })
            .catch(console.log)
           
        } 
        render(){
            const {criptodata} = this.state; 
            return(
    
                <div>
                <ul>
    
                   {criptodata.map(pokemon => {
                       return <li>{pokemon.name} </li>
                   })}
                </ul></div>
               
         )
        
    
        }
    }
    export default ValorCripto;