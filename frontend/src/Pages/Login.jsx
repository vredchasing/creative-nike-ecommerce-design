import { useState } from "react"
import axios from 'axios';

function Login (){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:5173/login', {email:email, password:password})
  }

  return(
    <section className="login-page-wrapper">
      <div className="login-page-content-wrapper">
        <div className="login-page-logo-container">
          <img className="login-page-logo" src="/slider-images/nike-word.png"></img>
        </div>
        <div className="login-page-text-container">
          <h1 className="login-page-text">Login to your Nike member account.</h1>
        </div>

        <form className="login-form">
          <div className="login-email-input-container">
            <input className="login-email-input" onChange={handleEmailChange}></input>
          </div>
          <div className="login-password-input-container">
            <input type='password'className="login-password-input" onChange={handlePasswordChange}></input>
          </div>
          <div className="login-button-container">
            <button className="login-button">Login</button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Login

