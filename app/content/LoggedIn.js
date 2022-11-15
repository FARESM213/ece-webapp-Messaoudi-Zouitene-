import {useContext} from 'react';
import Context from './userContext'


export default function LoggedIn() {
  const {user, logout} = useContext(Context)
  return (
    <div>
      Welcome {user}!
      <div>
        <button onClick={()=>{logout()}}>Logout</button>
      </div>
    </div>
  )
}
