import { useEffect, useState } from 'react'
import { getServiceSupabase } from '../../supabase'
import UserContext from '../../components/UserContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import MD5 from 'crypto-js/md5';

const supabase=getServiceSupabase();

export const getServerSideProps = async ({params}) => {

const {data : com,erreur2}= await supabase.from('comments').select('*').eq('id',params.id).single()
const res= await fetch("https://flagcdn.com/fr/codes.json")
const dat= await res.json();
return {
    props :
    {
      com,
      flag : dat
    }
}
}

export default function Comments({com,flag}) {
  const { user, username,logout, loading } = useContext(UserContext)
  const [data, setData] = useState()
  const router = useRouter()

  function Loadflag(name,flag)
  {  
      var flag2=-1
      for (let key in flag) {
          if(flag[key]==name)
          {
                flag2=key
          }
        }
    return  flag2;
  }

  async function Update(id) {

      const commentaires =document.getElementById("comm").value;
      const { error } = await supabase.from('comments').update({content:commentaires,updated_at: new Date().toISOString()}).eq("id",id)  
      alert("Commentaire modifié ! ")
      router.push("/comments/"+id)
  }
    
    return (
      <div className="py-10 min-h-full max-w-full md:max-w-9xl md:mx-auto">
        
          <div className={styles.userform6} >
                    <h2> Espace Commentaires :  </h2>
                  {
                    user?<button className={styles.yes} onClick={async()=>Update(com.id)} >Update </button>: <button className={styles.yes} onClick={async()=>router.push("/Login")} > Connect </button>
                  }
                  <input type="text" id="comm" name="comm" placeholder="Modifiez votre commentaire sur l'equipe" required /> <br/>
                  
                      
                            <div className={styles.card2}  key={com.id}>            
                            <img type='yesbb' src={"https://flagcdn.com/w2560/"+Loadflag(com.equipe_nom,flag)+".jpg"} width="50" length="50" /> 

                            <img className={styles.round} src={"https://www.gravatar.com/avatar/"+MD5(com.user_email)} width="100" length="100" />  
                            <h1 >{com.user_username} : </h1>

                            <p type="p2"> {com.content} </p>
                                
                            <h6> {"Le "+new Date(com.updated_at).getDate()+"-"+(new Date(com.updated_at).getMonth()+1)+"-"+new Date(com.updated_at).getFullYear()+" à "+new Date(com.updated_at).getHours()+"h"+new Date(com.updated_at).getMinutes()} </h6> 

                          </div>
                  </div>

                 </div>        
      )
}
