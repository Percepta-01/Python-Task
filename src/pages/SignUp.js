import React from 'react'
import './Login.css';


function SignUp() {
  return (
    <div className="login-container">
    <h2>SignUp</h2>
    <form  className="login-form">
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          required
          className="input"
          placeholder='Email'
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          required
          className="input"
          placeholder='Password'
        />
      </div>
      <div className="input-group">
        <label>Confirm Password</label>
        <input
          type="password"
          required
          className="input"
          placeholder='Confirm Password'
        />
      </div>

      <button type="submit" className="button">SignUp</button> <br></br>
    </form>
  </div>  )
}

export default SignUp