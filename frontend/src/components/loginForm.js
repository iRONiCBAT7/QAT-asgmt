import Board from './board'
import {useNavigate, NavLink} from 'react-router-dom'
import {useState} from 'react'


const  Login = () => {
const navigate = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  const handleClick = async (e)=>{
    e.preventDefault();
    const requestData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    }
    try{

    const response = await fetch('http://localhost:8080/login', requestData);
    const json = await response.json();
    const {validUser, userType} = json;
    
    if(validUser){

      navigate(`/dashboard/?userType=${userType}`)
    }else{
      setEmail('')
      setPassword('')
      alert('Invalid password or email')
    }

  }catch{
    alert('server error')
  }

  }



  return ( 
    <>
    <div className="container">
      <Board/>
      <div className="loginContainer">

        <div>
          <h2> Login </h2>
          <p>Sign in to your account</p>
        </div>

        <form className="formContainer">
          <label htmlFor="email">Email address</label>
          <input type="email" name='email' value={email} id="email" onChange={(e)=> setEmail(e.target.value)}  /> <br/>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id="password" 
          value={password}  
          onChange={(e)=> setPassword(e.target.value)}/> <br/>

          <button type="submit" onClick={handleClick} className="sign-in"> Login</button>
        </form>
       
        <div className="register">
          <p> New User - <NavLink to="/signup">Sign Up</NavLink>   </p>
        </div>

      </div>
    </div>
    </>
    )
  }

  export default Login;