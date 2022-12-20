import { useEffect, useState } from 'react'
import {getServiceSupabase} from '../../supabase'
import UserContext from '../../components/UserContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'


const supabase=getServiceSupabase();

export const getServerSideProps = async ({params}) => {

let {data : equipe,erreur}= await supabase.from('equipe').select('*').eq('id',params.id).single()
let {data : comment,erreur2}= await supabase.from('comments').select('*').eq('equipe_id',params.id)


equipe={

  id:3,
  nom : "France",
  coach : "Dédé"

}


comment=
  [

    { id:3,
      user_id : "12345667887432114567",
      equipe_id : "3",
      content : "commentaire test pour lydia"
    }

  ]


return {
    props :
    {
      equipe,
      comment,
    }
}
}

export default function Profile({ equipe,comment }) {
  let { user, logout, loading } = useContext(UserContext)
  const [data, setData] = useState()
  const router = useRouter()

    user={id:3}


    useEffect(() => {
        async function loadData() {
          setData(equipe)
        }
        loadData()
      })


      async function getMD(id) {
        const data= await supabase.from('profiles').select("email").eq('id', id).single()
        if(data)
        {        
          alert(MD5(data.email))

          return MD5(""+data.email)
        }

    }

    async function Delete(id) {
              
          const { error } = await supabase.from('equipe').delete().eq('id', id)
          alert('Equipe supprimé')
          router.push('/equipe')
    }
    async function Delete2(id) {
              
        const { error } = await supabase.from('comments').delete().eq('id', id)
        alert('Commentaire supprimé')
        router.push('/equipe/'+equipe.id)
    }
    async function Update(id) {
        const equipe =document.getElementById("equipe").value;
        const compo = document.getElementById("Composition").value;
        const Entraineur = document.getElementById("Entraineur").value;

        const updates = 
        {
            "nom": ""+equipe,
            "coach": ""+Entraineur
        }
      const { error } = await supabase.from('equipe').update({nom:""+equipe, coach: ""+Entraineur}).eq('id', id)   
      router.push('/equipe')
    }
    async function Update2(id) {
       alert("Ok pour le moment on fait rien"+id)
    }
    async function insert(id) {

      const commentaires =document.getElementById("comm").value;
      const { error } = await supabase.from('comments').insert({equipe_id:id, user_id:user.id,content:commentaires,user_email:user.email})  
      router.push('/equipe/'+equipe.id)
    }

      {
            return (

          <div>
                
                <form className={styles.teamdata} >
                    <label>Nom de l'équipe</label>
                   
                    <input type="text" id="equipe" name="equipe" defaultValue={equipe.nom|| ''}/> <br/>
                    
                    <label>Coatch</label>
                   
                    <input type="text" id="Coatch" name="Coatch" defaultValue={equipe.nom|| ''}/> <br/>
                    
                    <label>Nom en anglais</label>
                    <input type="text" id="anglais" name="anglais" defaultValue={equipe.nom|| ''}/> <br/>
                    
                    <label>Liste des joueurs</label>
                   
                    <input type="text" id="joueurs" name="joueurs" defaultValue={equipe.nom|| ''}/> <br/>
               

                    <label>Composition</label>
                  
                    <input type="text" id="Composition" name="Composition"  defaultValue={equipe.nom|| ''}/> <br/>
             
                
                
                    <label>Dernière victoire</label>
                    <input type="text" id="victoire" name="victoire"  defaultValue={equipe.coach|| ''} /> <br/>
             
                
             
                <label>Continent</label>
                        <select name="categorie" className={styles.li}>
                
                            <option value="amerique" >Amérique</option>
                            <option value="Europe">Europe</option>
                            <option value="Asie">Asie</option>
                            <option value="Afrique">Afrique</option>
                
                        </select>
                      
               <td>
              <div>              
              <button type="submit1" onClick={async()=>Update(equipe.id)}> Modifier </button>
              <button type="submit" onClick={async()=>Delete(equipe.id)} > Supprimer </button>
              </div>
              </td>
              </form>       

                <br></br> <br></br>
                <form className={styles.teamdata} >
                <div className={styles.userform2} >
                    <h2> Espace Commentaires :  </h2>
                    <button className={styles.yes} onClick={async()=>insert(equipe.id)} > Add + </button>

                    <input type="text" id="comm" name="comm" placeholder="Ecrivez votre commentaire sur l'equipe" /> <br/>
                    <div className={styles.scroll2}>
                            {comment.map(com => (
                                                    <div className={styles.card2} key={com.id} >
 
                                                                  Id : {com.id} <br/>
                                                                  User_id : {com.user_id}    <br/>
                                                                  equipe_id :   {com.equipe_id}  <br/>      
                                                                  content : {com.content}      <br/>
                                                                  { com.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-300 " onClick={async()=>Delete2(com.id)} > Delete </button>):<></>}
                                                                  { com.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-300 "onClick={async()=>Update2(com.id)} >Edit</button>):<></>}
                                                          </div>
                                                      ))
                            }
                    </div>

                                 
          
                </div>
                </form>  
          </div>
        
            )

      }
}
