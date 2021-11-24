
import  React, {Component}  from 'react'
import  './styles/Card.css'
import axios from 'axios'

class ValorCripto extends Component{

    componentDidMount(){
        axios.get('http://127.0.0.1:5000/api/BTC/')
        .then(result=> { console.log(result)})
        .catch(console.log)
    } 
    render(){
        return(
<<<<<<< HEAD
        <h1>no anda loco</h1>)
=======
        <h1>no anda wachin</h1>)
>>>>>>> auxfran
    }
   

}
export default ValorCripto;