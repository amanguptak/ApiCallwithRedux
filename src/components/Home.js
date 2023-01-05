import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUsers } from '../store/Users/userSlice'
import Users from "./Users/Users"
export default function Home() {
    const dispatch = useDispatch()
   
    useEffect(()=>{
    
     const fetchAllusers = async()=>{

        const res = await axios.get(`https://reqres.in/api/users`)
        console.log(res.data.data)
        //dispatching the data into redux store
        dispatch(addUsers(res.data.data))
     }
     fetchAllusers()
    })
  return (
    <><Users/>
   
    </>
  )
}
