import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/loginForm'
import SignUp from './components/signupForm'
import Dashboard from './components/dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Routes>
                <Route path="/login" element = {<Login/>} />
                <Route path="/signup" element = {<SignUp />} />
                <Route path="/dashboard" element = {<Dashboard />} />
            </Routes> 
        </div>
        </BrowserRouter>


    </div>
  );
}

export default App;
