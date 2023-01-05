import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "./user.css"
export default function User() {
const {id}=useParams();
const [user,setUser]= useState({})
useEffect(()=>{
  const getUser = async()=>{
    const res =  await axios.get(`https://reqres.in/api/users/${id}`)
    setUser(res.data.data)
    console.log(res.data.data)
  }
    getUser()
  
},[id])
  return (
  <>
  <div className="card">
    <img src={user.avatar} alt="user" className="image" />
    <h4>UserId: {user.id}</h4>
    <h3 className="name">Name:{user.first_name} {user.last_name}</h3>
    <h4>emailId: {user.email}</h4>
  </div>
  </>
  )
}
