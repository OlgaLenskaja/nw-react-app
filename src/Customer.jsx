import React, {useState} from 'react'
import './App.css'


const Customer =({customer, handleDeleteClick})=> {

    const [showMore, setShowMore] = useState(false)
    
    return( 
    <>
    
      <h3 onClick={()=> setShowMore(!showMore)}>
        {customer.companyName} <button onClick={() => handleDeleteClick(customer.customerId)}>Delete</button>
        <button>Edit</button>
      </h3>
    {showMore &&  <div className="customerWindow"> 
    <table>
        <thead>
            <tr>
                <th>Contact person</th>
                <th>Address</th>
                <th>City</th>
            </tr>

        </thead>
    
        <tr>
            
            <td>{' '}{customer.contactName}{' '}</td>
            <td>{' '}{customer.address}{' '}</td>
            <td>{' '}{customer.city}{' '}</td>
          
        </tr>
    </table>
    </div>
    }
    


      {/* <h1>Customers</h1>
      {customers && customers.map(customer =>
        <Customer cuatomer={customer} />
        )}
      {!customers && <p>Loading...</p>} */}
     
    </>
  
  )
}
export default Customer;