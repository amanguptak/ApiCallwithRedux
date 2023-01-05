import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../../store/Users/userSlice'
import "./users.css"

export default function Users() {
    const users = useSelector(getAllUsers)
  
    
  return (
    <div className="container">
    <h1 className="total">All Users Details Convin</h1>
    <h3 className="total">Click on Button for User details</h3>
    {
        users.map((item,key)=>(

                <Link to={`/users/${item.id}`} key={item.id}><button className="btn"><span>{item.id}</span></button></Link>
                
        ))
    }

    </div>
  )
}
