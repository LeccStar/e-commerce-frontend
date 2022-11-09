import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingButton from '../LoadingButton/LoadingButton'

const Login = () => {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
        <LoadingButton isLoading={isLoading} text='Continuar'/>
    </div>
  )
}

export default Login