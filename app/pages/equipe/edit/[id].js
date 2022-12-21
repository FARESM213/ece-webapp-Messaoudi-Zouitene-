import { useEffect, useState } from 'react'
import { getServiceSupabase } from '../../../supabase'
import UserContext from '../../../components/UserContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import MD5 from 'crypto-js/md5';

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
  const compo = ['3-1-4-2', '3-4-1-2', '3-4-2-1','3-4-3','3-5-1-1','3-5-2','4-1-2-1-2','4-1-3-2' ,'4-1-4-1','4-2-2-2','4-2-3-1','4-2-4','4-3-1-2','4-3-2-1','4-3-3','4-4-1-1','4-4-2','4-5-1','5-2-1-2','5-2-2-1','5-2-3','5-3-2','5-4-1'];

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

    async function Update(id) {

        const equipe =document.getElementById("equipe").value;
        const Entraineur = document.getElementById("Entraineur").value;
        const fla =  document.getElementById("anglais").value;
        const players =  document.getElementById("joueurs").value;        
        
        
        const continen = ""+document.querySelector('#continent').value;
        const compos = ""+document.querySelector('#Composition').value;

        const updates = 
        {
            "nom": ""+equipe,
            "coach": ""+Entraineur,
            "Composition": ""+compos,
            "Continent" :""+continen,
            "flag":""+fla,
            "Liste_joueurs":""+players
        }

      const { error } = await supabase.from('equipe').update(updates).eq('id', id)   
      let { error:error2 } = await supabase.from('comments').update({equipe_nom:equipe}).eq('equipe_id',id)

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

          <div className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">

            <div className={styles.teamdata} >
                    <label>Nom de l'équipe</label>
                    <input type="text" id="equipe" name="equipe" required defaultValue={equipe.nom|| ''}/> <br/>
                    <label>Coach</label>
                    <input type="text" id="Entraineur" name="Entraineur" required defaultValue={equipe.coach|| ''}/> <br/>
                    <label>Nom en anglais</label>
                    <input type="text" id="anglais" name="anglais" required defaultValue={equipe.flag|| ''}/> <br/>
                    <label>Liste des joueurs</label>
                    <input type="text" id="joueurs" name="joueurs" required defaultValue={equipe.Liste_joueurs|| ''}/> <br/>
                    <label>Composition</label>
                  
                    <select  type="text" id="Composition" name="Composition" defaultValue={equipe.Composition|| ''}>
                    {compo.map(compo => (
                    <option type="text" value={compo} key={compo}>{compo}</option>
                    ))}
                    </select>             
              
                <label>Continent</label>
                        <select  id="continent" name="continent" className={styles.li} defaultValue={equipe.Continent|| ''}>
                            <option value="amerique" >Amérique</option>
                            <option value="Europe">Europe</option>
                            <option value="Asie">Asie</option>
                            <option value="Afrique">Afrique</option>
                        </select>
                      
                  <tr>      
        
                    <th>
                        <button type="submit" onClick={async()=>Delete(equipe.id)} > Supprimer </button>                      
                    </th>     
                    <th>
                       <button type="submit1" onClick={async()=>Update(equipe.id)}> Modifier </button>
                    </th>
                          
                  </tr>
              </div>  
        </div>
            )
      }
}
