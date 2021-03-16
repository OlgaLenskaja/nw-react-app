
import logo from './logo.svg';
import './App.css';
import Laskuri from './laskuri'
import { useState } from 'react';
import CustomerList from './CustomerList'
import Message from './Message'

const App =()=> {
  const [luku, setLuku]= useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [isPositive, setIsPositive] = useState(false)
  const [message, setMessage] = useState('')

  // setTimeout(() => {
  //   setLuku(luku+1)
  // },1000
  // )

  return (
    <div className="App">
      <header className="App-header">
        <h1>Northwind -harjoitus</h1>
        </header>
       {showMessage &&
         <Message message={message} isPositive ={isPositive} />
       } 
       
       {<CustomerList setShowMessage={setShowMessage} setIsPositive={setIsPositive}
       setMessage={setMessage} />}

    
     
    </div>
  );
}

export default App;
