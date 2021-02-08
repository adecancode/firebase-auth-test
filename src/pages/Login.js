import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to Create Account')
        }
        setLoading(false)
    }

    return (
        <div className="mx-8">
            {error && <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                >
                    {error}
                </ToastContainer>
            }
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 rounded-lg mx-auto mt-16 p-8 bg-gray-50">
                <p className="text-center font-bold text-gray-800 text-xl">Login</p>
                <form onSubmit={handleSubmit} className="mt-6">
                    <input className="w-full p-4 rounded-lg outline-none" placeholder="Your Email" type="email" ref={emailRef} required/>
                    <input className="w-full p-4 rounded-lg my-6 outline-none" placeholder="Enter A Password" type="password" ref={passwordRef} required/>
                    <button type="submit" disabled={loading} className="w-full bg-purple-600 py-4 outline-none border-none text-white font-semibold rounded-lg text-center">Submit</button>
                </form>
                <p className="text-center mt-8 text-sm text-gray-500">Don't Have An Account? <a className="text-purple-600 font-semibold">Sign Up</a></p>
            </div>
        </div>
    )
}
