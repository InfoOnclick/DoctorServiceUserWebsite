import '../pages/css/Login.css'
import React from 'react';

import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

export default function UserLogin() {
 
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg mt-5" id="loginForm">
  {/* Header */}
  <div className="text-center mb-6">
    <h1 className="text-4xl font-bold text-gray-800">DocPro</h1>
    <h4 className="opacity-70 text-lg text-gray-600">Signin to Continue</h4>
  </div>

  {/* Email Input */}
  <div className="mb-4">
    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-Email">Email</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        label="Email"
        startAdornment={
          <InputAdornment position="start">
            <IconButton size="small">
              <EmailIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  </div>

  {/* Password Input */}
  <div className="mb-4">
    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        startAdornment={
          <InputAdornment position="start">
            <IconButton size="small">
              <LockIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  </div>

  {/* Forgot Password Link */}
  <div className="mb-4 text-right">
    <a href="https://example.com" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
      Forgot Password?
    </a>
  </div>

  {/* Login Button */}
  <div className="mb-6">
    <Button
      href="/services"
      variant="contained"
      className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600"
    >
      Login
    </Button>
  </div>

  {/* Terms & Conditions Text */}
  <div className="text-center text-sm text-gray-600 mb-6">
    <h6 className="opacity-70">
      By signing in, you agree to our{' '}
      <a href="https://example.com" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Terms & Conditions
      </a>{' '}
      and{' '}
      <a href="https://example.com" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Privacy Policy
      </a>
    </h6>
    <h6 className="opacity-50">
      Don't have an account?{' '}
      <a href="https://example.com" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Get Started
      </a>
    </h6>
  </div>
</div>

  )
}

