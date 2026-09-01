import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DashboardLayout from '../Components/DashboardLayout'

const Contacts = () => {
  const [message, setMessage] = useState([])
  const api_url = import.meta.env.VITE_API_URL 

  const fetchMessage = async () => {
    try {
      const res = await axios.get(`${api_url}/api/message/get-message`)
      setMessage(res.data.contacts)
      console.log(res);
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <>
      <DashboardLayout>
        <table border='1' cellSpacing='0' cellPadding='10'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone </th>
            <th>Message</th>
          </tr>
          {
            message?.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
              </tr>
            ))
          }
        </table>
      </DashboardLayout>
    </>
  )
}

export default Contacts
