import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'



function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2 style={
            {
                color: 'green'
            }
        
        }>
            Login
        </h2>
        <input type="text" 
        value={username}
        style={
            {
                marginTop: '10px'
            }
        }
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>
        <br/>
        <input type="password" placeholder='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                style={
                    {
                        marginTop: '10px'
                    }
                
                } />
        <br/>
        <button onClick={handleSubmit} style={
            {
                marginTop: '10px',
                padding: '10px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
            }
        
        }>Submit</button>
    </div>
  )
}

export default Login