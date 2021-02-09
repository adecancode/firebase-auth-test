import React from 'react'
import { useAuth } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";


export default function Dashboard() {

    const { currentUser, logout } = useAuth()
    const history = useHistory()
    
    async function handleSignOut() {
        try {
            await logout()
            history.push('/login') 
        } catch {
            toast.error('Failed to Sign Out', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div>
        <ToastContainer/>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 rounded-lg mx-auto mt-16 p-8 bg-gray-50">
                <p className="text-xl">Welcome, <span className="font-bold">{currentUser.email}</span></p>
                <button onClick={handleSignOut} type="submit" className="w-full bg-purple-600 py-4 mt-6 outline-none border-none text-white font-semibold rounded-lg text-center">Sign Out</button>
            </div>
        </div>
    )
}
