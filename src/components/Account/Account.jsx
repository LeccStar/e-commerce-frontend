import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'


const Account = () => {

  const [formulario, setFormulario] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const createUser = async (e) => {
    e.preventDefault()
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={createUser}>
        <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt width={72} height={57} />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={formulario.name} name="name" onChange={handleInputChange} />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" value={formulario.lastName} name="lastName" onChange={handleInputChange} />
          <label htmlFor="floatingInput">Last Name</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={formulario.email} name="email" onChange={handleInputChange} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={formulario.password} name="password" onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </main>

  )
}

export default Account