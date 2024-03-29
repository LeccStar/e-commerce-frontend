import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UserContext } from '../../../context/UserContext'
import { signupService } from '../../../services/userService'
import LoadingButton from '../../LoadingButton/LoadingButton'
import robot from '../../../shared/robot.png'
import "./Account.css"

const Account = () => {

  const { loginContext } = useContext(UserContext)


  const [formulario, setFormulario] = useState({
    name: "",
    lastName: "",
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

  const createUser = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    console.log(e.target.verifyPassword.value);

    if (e.target.verifyPassword.value===formulario.password) {
      try {
        const resp = await signupService(formulario)
        loginContext(resp);
        navigate("/home")

      } catch (error) {
        Swal.fire(
          "Mensaje",
          `${error.response.data.errors[0].msg}`,
          "error"
        )
        setIsLoading(false)
        console.log(error);
      }
    } else {Swal.fire(
      "Mensaje",
      `Password do not match`,
      "error"
    )
    setIsLoading(false)
    }
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={createUser}>
        <img className="mb-4" src={robot} alt="img" width={72} height={57} />
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={formulario.name} name="name" onChange={handleInputChange} />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" placeholder="Last Name" value={formulario.lastName} name="lastName" onChange={handleInputChange} />
          <label htmlFor="floatingInput">Last Name</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" placeholder="name@example.com" value={formulario.email} name="email" onChange={handleInputChange} />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={formulario.password} name="password" onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Pasword</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" placeholder="Password" name='verifyPassword'/>
          <label htmlFor="floatingPassword">Repeat Passwrord</label>
        </div>
        <br/>
        <LoadingButton isLoading={isLoading} text='Continue' className="w-100 btn btn-lg btn-primary" type="submit" />
        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </main>

  )
}

export default Account