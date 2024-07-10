
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert(`Logging in with email: ${email} and password: ${password}`);
//   };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form  className="login-form">
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            required
            className="input"
            placeholder='email'
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            required
            className="input"
            placeholder='password'
          />
        </div>
        <button type="submit" className="button">Login</button> <br></br>
        <Link to={'/SignUp'} className='link'>Don't have a account ? <span className='text-danger'>SignUp</span></Link>
      </form>
    </div>
  );
};

export default Login;
