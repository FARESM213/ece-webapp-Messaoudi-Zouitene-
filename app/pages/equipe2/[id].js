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
  const compo = ['3-1-4-2', '3-4-1-2', '3-4-2-1','3-4-3','3-5-1-1','3-5-2','4-1-2-1-2','4-1-3-2' ,'4-1-4-1','4-2-2-2','4-2-3-1','4-2-4','4-3-1-2','4-3-2-1','4-3-3','4-4-1-1','4-4-2','4-5-1','5-2-1-2','5-2-2-1','5-2-3','5-3-2','5-4-1'];

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
        const compo = ""+document.querySelector('#Composition').value;
        const Entraineur = document.getElementById("Entraineur").value;
        const fla =  document.getElementById("anglais").value;
        const continen = ""+document.querySelector('#continent').value;
        const players =  document.getElementById("joueurs").value;

        const updates = 
        {
            "nom": ""+equipe,
            "coach": ""+Entraineur,
            "Composition": ""+compo,
            "Continent" :""+continen,
            "flag":""+fla,
            "Liste_joueurs":""+players
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

              <div className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">
                <form className={styles.teamdata} >
                    <label>Nom de l'équipe</label>
                    <input type="text" id="equipe" name="equipe" defaultValue={equipe.nom|| ''}/> <br/>
                    <label>Coach</label>
                    <input type="text" id="Entraineur" name="Entraineur" defaultValue={equipe.coach|| ''}/> <br/>
                    <label>Nom en anglais</label>
                    <input type="text" id="anglais" name="anglais" defaultValue={equipe.flag|| ''}/> <br/>
                    <label>Liste des joueurs</label>
                    <input type="text" id="joueurs" name="joueurs" defaultValue={equipe.Liste_joueurs|| ''}/> <br/>
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
                      
                  <div>              
                        <button type="submit1" onClick={async()=>Update(equipe.id)}> Modifier </button>
                        <button type="submit" onClick={async()=>Delete(equipe.id)} > Supprimer </button>
                  </div>
              </form>       

                <br></br> <br></br>

          </div>
        
            )

      }
}
