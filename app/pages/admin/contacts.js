import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

const contactPage = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [data, setData] = useState()

  useEffect(() => {
    async function loadData() {
    const { data } = await supabaseClient.from('contacts').select('*')
     setData(data)
    }
    // Only run query once user is logged in.
    loadData()
  }, [user])

  async function handlesubmit(event)
  {
    event.preventDefault();
    const email=event.target.email.value;
    const firstname=event.target.firstname.value;
    const lastname=event.target.lastname.value;
    const message=event.target.message.value;
    const date = new Date();

    if((date)&&(email)&&(firstname)&&(lastname)&&(message))
    {
          const { error } = await supabaseClient.from('contacts').insert({created_at: date,firstname:firstname,lastname:lastname,email: email,message:message})
          if({error})
          {
            alert(" Lutilisateur vient d'etre ajouté a la base de donnees ");
          }
  }
    else
    {
      alert(" L'un des champs est vide ");

    }
   
  
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>

<form onSubmit={handlesubmit}>
      <h1> Ajouter un contact </h1>
      <label>firstname</label>
      <input type="text" id="firstname" name="firstname"></input> <br/>
      <label>lastname</label>

      <input type="text" id="lastname" name="lastname"></input><br/>
      <label>email</label>

      <input type="email" id="email" name="email"></input><br/>
      <label>message</label>

      <input type="text" id="message" name="message"></input><br/>
      <button type='submit' url='http://localhost:3000/admin/contacts'>click me </button>

</form>
    </>
  )
}

export default contactPage
