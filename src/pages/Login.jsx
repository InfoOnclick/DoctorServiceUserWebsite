import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className="min-h-[80vh] flex flex-col justify-center px-4">
    <div className="flex flex-col gap-4 m-auto items-start p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md border rounded-xl text-zinc-600 text-sm shadow-md">
      
      {/* Title */}
      <p className="text-2xl font-semibold text-center sm:text-left w-full">
        {state === 'Sign Up' ? 'Create Account' : 'Login'}
      </p> 
  
      <p className="text-center sm:text-left w-full">
        Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
      </p>
  
      {/* Full Name (Only in Sign Up) */}
      {state === 'Sign Up' && (
        <div className="w-full">
          <p>Full Name</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
      )}
  
      {/* Email */}
      <div className="w-full">
        <p>Email</p>
        <input
          className="border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
  
      {/* Password */}
      <div className="w-full">
        <p>Password</p>
        <input
          className="border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
  
      {/* Submit Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white text-base w-full py-2 rounded-md transition">
        {state === 'Sign Up' ? 'Create Account' : 'Login'}
      </button>
  
      {/* Switch Between Login & Signup */}
      <p className="text-center sm:text-left w-full">
        {state === 'Sign Up' ? (
          <>Already have an account? <span onClick={() => setState('Login')} className="text-blue-500 underline cursor-pointer">Login here</span></>
        ) : (
          <>Don't have an account? <span onClick={() => setState('Sign Up')} className="text-blue-500 underline cursor-pointer">Sign up</span></>
        )}
      </p>
    </div>    
  </form>
  
  )
}

export default Login
