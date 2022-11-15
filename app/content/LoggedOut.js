import {useContext} from 'react';
import Context from './userContext'


const onClickLogin = async (login) => 
{
    const response = await fetch('http://localhost:3000/api/hello')
    const user = await response.json()
   // login(user.name)
}
  

export default function LoggedOut() {
    const {login} = useContext(Context)
    return (
      <div>
        <button onClick={async() => 
        
{
                  const response = await fetch('http://localhost:3000/api/hello')
                  const user = await response.json()
                  login(user.name)
}}                                     

> Login</button>
      </div>
    )
  }