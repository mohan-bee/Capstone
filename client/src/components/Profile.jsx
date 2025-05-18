import React from 'react'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Profile = ({user}) => {
    const navigate = useNavigate()
    const logout = async() => {
        try {
            const res = await axiosInstance.get('/auth/logout')
            toast.success(res.data.message)
            navigate('/login')
        } catch (error) {
            console.log(error.response);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
}
  return (
    <div>
        <img src={user.avatar} alt="" />
        <h1>Username: {user.username}</h1>
        <p>Email: {user.email}</p>
        <p>Balance: {user.balance}</p>
        <p>Expenses: {user.expenses}</p>
        <p>Savings: {user.savings}</p>
        <button onClick={logout} className='btn bg-red-600'>Logout</button>
    </div>
  )
}

export default Profile