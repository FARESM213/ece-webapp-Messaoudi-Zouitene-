import { useEffect, useState } from 'react'
import {getServiceSupabase} from '../../supabase'
import UserContext from '../../components/UserContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const supabase=getServiceSupabase();

export const getServerSideProps = async ({params}) => {

const {data : equipe,erreur}= await supabase.from('equipe').select('*').eq('id',params.id).single()
const {data : comment,erreur2}= await supabase.from('comments').select('*').eq('equipe_id',params.id)

return {
    props :
    {
      equipe,
      comment,
    }
}
}

export default function Profile({ equipe,comment }) {
  const { user, logout, loading } = useContext(UserContext)
  const [data, setData] = useState()
  const router = useRouter()

    useEffect(() => {
        async function loadData() {
          setData(equipe)
        }
        loadData()
      })
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
      const { error } = await supabase.from('comments').insert({equipe_id:id, user_id:user.id,content:commentaires})  
      router.push('/equipe/'+equipe.id)
    }

    if(user.id==equipe.user_id)
    {
        return (

      <div>
            <div className={styles.inputgroupA}>
                <label>Nom de l'équipe</label>
                <input type="text" id="equipe" name="equipe" defaultValue={equipe.nom|| ''}/> <br/>
            </div>

            <div className={styles.inputgroupA}>
                <label>Composition</label>
                <input type="text" id="Composition" name="Composition"  defaultValue={equipe.nom|| ''}/> <br/>
            </div>
            
            <div className={styles.inputgroupA}>
                <label>Entraineur</label>
                <input type="text" id="Entraineur" name="Entraineur"  defaultValue={equipe.coach|| ''} /> <br/>
            </div>
            
            <div className={styles.inputgroupA}>
                <label>Dernière victoire</label>
                <input type="text" id="victoire" name="victoire"  defaultValue={equipe.coach|| ''} /> <br/>
            </div>
            
            <div className={styles.inputgroupA}>
            <label>Continent</label>
                    <select name="categorie" className={styles.liste}>
            
                        <option value="amerique" >Amérique</option>
                        <option value="Europe">Europe</option>
                        <option value="Asie">Asie</option>
                        <option value="Afrique">Afrique</option>
            
                    </select>
            </div> <br/> <br/>   
                                 
            <button onClick={async()=>Update(equipe.id)}> Modifier </button><br/>
            <button onClick={async()=>Delete(equipe.id)} > Supprimer </button>

            <div>
                    <label> Espace Commentaires :  </label>
                    <button onClick={async()=>insert(equipe.id)} > Add + </button>
                    <input type="text" id="comm" name="comm" placeholder="Ecrivez votre commentaire sur l'equipe" /> <br/>
                    <ul>
                    {comment.map(com => (
                                    <li className={styles.card}  >

                                            Id : {com.id} <br/>
                                            User_id : {com.user_id}    <br/>
                                            equipe_id :   {com.equipe_id}  <br/>      
                                            content : {com.content}      <br/>
                                            { equipe.user_id==user.id?(<button onClick={async()=>Delete2(com.id)} >DELETE</button>):<></>}
                                            { equipe.user_id==user.id?(<button onClick={async()=>Update2(com.id)} >Update</button>):<></>}
                                    </li>
                                ))
                    }
                    </ul>
            </div>
      </div>
        )
    }
    else
    {
      return (
        <div>
                Nom : {equipe.nom}
                Entraineur : {equipe.coach}
                <div>
                    <label> Espace Commentaires :  </label>
                    <button onClick={async()=>insert(equipe.id)} > Add + </button>
                    <input type="text" id="comm" name="comm" placeholder="Ecrivez votre commentaire sur l'equipe" /> <br/>
                    <ul>
                    {comment.map(com => (
                                    <li className={styles.card}  >
                                            Id : {com.id} <br/>
                                            User_id : {com.user_id}    <br/>
                                            equipe_id :   {com.equipe_id}  <br/>      
                                            content : {com.content}      <br/>
                                            { equipe.user_id==user.id?(<button onClick={async()=>Delete2(com.id)} >DELETE</button>):<></>}
                                            { equipe.user_id==user.id?(<button onClick={async()=>Update2(com.id)} >Update</button>):<></>}

                                    </li>
                                ))
                    }
                    </ul>
                </div>
        </div>
    )
    }
  }

    

