import React from 'react'
import { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { loginService } from '../../../services/userService'
import LoadingButton from '../../LoadingButton/LoadingButton'
import { UserContext } from '../../../context/UserContext'
import robot from '../../../shared/robot.png'

const Login = () => {
  const { loginContext } = useContext(UserContext)

  const [formulario, setFormulario] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState(false)


  const handleInputChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const loginUser = async (e) => {
    setIsLoading(true)
    e.preventDefault()

    try {
      const resp = await loginService(formulario)
      console.log(resp);
      loginContext(resp);
      navigate("/home")

    } catch (error) {
      Swal.fire(
        "Mensaje",
        `${error.response.data.msg}`,
        "error"
      );
      setIsLoading(false)
      console.log(error);
    }
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={loginUser}>
        <img className="mb-4" src={robot} alt="img" width={72} height={57} />
        <h1 className="h3 mb-3 fw-normal">Ingresar</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={formulario.email} name="email" onChange={handleInputChange} />
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={formulario.password} name="password" onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <LoadingButton isLoading={isLoading} text='Continuar' className="w-100 btn btn-lg btn-primary" type="submit"/>
        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </main>
  )
}

export default Login