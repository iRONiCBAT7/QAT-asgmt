import Board from './board'
import {useNavigate, NavLink} from 'react-router-dom'
import {useState} from 'react'


const  SignUp = () => {
const navigate = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [userType, setUserType] = useState('user')



  const handleClick = async (e)=>{
    e.preventDefault();
    const requestData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email, password,userType})
    }

    try{
    const response = await fetch('http://localhost:8080/signup', requestData);
    const json = await response.json();
    console.log(json);

    if(json.data === 'added'){
      navigate('/login')
      alert('Signed Up')
    }else if(json.data === "invalid"){
      setEmail('')
      setPassword('')
      setUserType('user')
      alert("Enter Valid data")
    }else{
      setEmail('')
      setPassword('')
      setUserType('user')
      alert("User already exist")
    }
  }catch{
    alert('server error')
  }

  }



  return (<>

    <div className="container">

    <Board/>
    <div className="loginContainer">

        <div>
          <h2> Sign Up </h2>
          <p>Sign in to your account</p>
        </div>

        <form className="formContainer">
          <label htmlFor="email">Email address</label>
          <input type="email" name='email' value={email} id="email" onChange={(e)=> setEmail(e.target.value)}  /> <br/>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id="password" 
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}/> <br/>

          <select name="userType" className="selectuser" value={userType} onChange={(e)=> setUserType(e.target.value)}>
            <option value="user" name='userType' >User</option>
            <option value="superuser" name='userType' >Super User</option>
            <option value="admin" name='userType' >Admin</option>
          </select>

          <button type="submit" onClick={handleClick} className="sign-in"> Sign Up</button>
        </form>

        <div className="register">

        <p> Have an account? <NavLink to="/login">Login</NavLink>  </p>
        </div>

    </div>
    </div>
    </>
    )
  }

  export default SignUp;