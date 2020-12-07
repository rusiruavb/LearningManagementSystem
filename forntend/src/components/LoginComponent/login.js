import React, {useState} from 'react'
import './login.css'
import Button from '@material-ui/core/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="LoginBody">
      <div className="row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 col-sm-12">
            <div className="loginForm">
              <div className="d-flex justify-content-center">
                <h1>Student Login</h1>
              </div>
              <form >
                <div className="d-flex justify-content-center">
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                      placeholder="Enter your email"
                      className="form-control inputItem"
                      onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                      placeholder="Enter your password"
                      className="form-control inputItem"
                      onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                   <Button variant="contained" color="primary" disableElevation type="submit"
                   style={{outline: 'none', width: '200px', height: '40px', fontSize: '18px', background: '#0077FF'}}>login</Button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login