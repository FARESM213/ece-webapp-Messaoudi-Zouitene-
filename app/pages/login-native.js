
import { useState } from 'react'
export default function Login() 
{

    const [data, setData] = useState({})
    const onSubmit = function(e) {
      e.preventDefault()
      console.log(data)
    }
    return (
      <form onSubmit={onSubmit}>
        <h2>My form</h2>
        <div>
          <input
            type="text"
            name="my_input"
            value={data.my_value}
            onChange={e => setData({...data, ...{my_input: e.target.value}})}
          />
        </div>
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
    )
    
  }