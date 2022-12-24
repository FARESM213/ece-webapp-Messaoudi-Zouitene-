import { useEffect, useState } from 'react'
import { getServiceSupabase } from '../../supabase'
import UserContext from '../../components/UserContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import MD5 from 'crypto-js/md5';
import Head from 'next/head'
const supabase = getServiceSupabase();

export const getServerSideProps = async ({ params }) => {

  const { data: equipe, erreur } = await supabase.from('equipe').select('*').eq('id', params.id).single()
  const { data: comment, erreur2 } = await supabase.from('comments').select('*').eq('equipe_id', params.id).order('updated_at', { ascending: false })
  const res = await fetch("https://flagcdn.com/fr/codes.json")
  const dat = await res.json();
  return {
    props:
    {
      equipe,
      comment,
      flag: dat
    }
  }
}

export default function Profile({ equipe, comment, flag }) {
  const { user, username, logout, loading } = useContext(UserContext)
  const [data, setData] = useState()
  const router = useRouter()
  const compo = ['3-1-4-2', '3-4-1-2', '3-4-2-1', '3-4-3', '3-5-1-1', '3-5-2', '4-1-2-1-2', '4-1-3-2', '4-1-4-1', '4-2-2-2', '4-2-3-1', '4-2-4', '4-3-1-2', '4-3-2-1', '4-3-3', '4-4-1-1', '4-4-2', '4-5-1', '5-2-1-2', '5-2-2-1', '5-2-3', '5-3-2', '5-4-1'];

  useEffect(() => {
    async function loadData() {
      setData(equipe)
    }
    loadData()
  })


  async function getMD(id) {
    const data = await supabase.from('profiles').select("email").eq('id', id).single()
    if (data) {
      alert(MD5(data.email))
      return MD5("" + data.email)
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
    router.push('/equipe/' + equipe.id)
  }
  async function Update(id) {

    router.push('/edit/' + id)
  }


  function Loadflag(name, flag) {
    var flag2 = -1
    for (let key in flag) {
      if (flag[key] == name) {
        flag2 = key
      }
    }
    return flag2;
  }

  async function Update2(id) {

    router.push("/comments/" + id)
  }

  async function insert(id) {

    const commentaires = document.getElementById("comm").value;
    

    if(commentaires==="")
    {
      alert("Le commentaire semble vide ...")
    }
    else
    {
        const { data, error: error2 } = await supabase.from('profiles').select("username").eq("id", user.id).single()
        const { data: data2, error: error3 } = await supabase.from('equipe').select("nom").eq("id", id).single()
        const { error } = await supabase.from('comments').insert({ equipe_id: id, user_id: user.id, content: commentaires, user_email: user.email, user_username: data.username, equipe_nom: data2.nom, updated_at: new Date().toISOString() })
        router.push('/equipe/' + equipe.id)
    }
 
  }

  return (
    <>
      <div className="py-10  max-h-97 max-w-full md:max-w-4xl md:mx-auto">
        <div className={styles.pays}>
          {user ? (equipe.user_id == user.id ? (<button className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-300 " onClick={async () => Update(equipe.id)} >Edit</button>) : <></>) : <></>}

          <img src={"https://flagcdn.com/w2560/" + Loadflag(equipe.nom, flag) + ".jpg"} width="100" height="100"></img>

          <label>Nom de l&apos;équipe</label>
          <p type="text" id="equipe" name="equipe" >  {equipe.nom}</p> <br />
          <label>Coach</label>
          <p type="text" id="equipe" name="equipe"> {equipe.coach}  </p><br />

          <label>Nom en anglais</label>
          <p type="text" id="equipe" name="equipe"> {equipe.flag}  </p> <br />

          <label>Capitaine</label>
          <p type="text" id="equipe" name="equipe">  {equipe.Liste_joueurs} </p> <br />

          <label>Composition</label>
          <p type="text" id="equipe" name="equipe"> {equipe.Composition}  </p> <br />



          <label>Continent</label>
          <p type="text" id="continent" name="continent">{equipe.Continent} </p>

        </div>





      </div>

      <div className={styles.userform6} >
        <h2> Espace Commentaires :  </h2>
        {
          user ? <button className={styles.yes} onClick={async () => insert(equipe.id)} > Add + </button> : <button className={styles.yes} onClick={async () => router.push("/Login")} > Connect </button>
        }
        <input type="text" id="comm" name="comm" placeholder="Ecrivez votre commentaire sur l'equipe" required /> <br />


        <div className={styles.scroll2}>

          {comment.map(com => (
            <div className='card2'key={com.id}>
              <img type='yesbb' src={"https://flagcdn.com/w2560/" + Loadflag(com.equipe_nom, flag) + ".jpg"} width="50" length="50" />
              <h1 >{com.user_username} : </h1>

              <img className={styles.round} src={"https://www.gravatar.com/avatar/" + MD5(com.user_email)} width="100" length="100" />

              <p type="p2"> {com.content} </p>
              {
                user ? (com.user_id == user.id ? (<button type="pe3" className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-300 " onClick={async () => Delete2(com.id)} > Delete </button>) : <></>) : <></>
              }
              {
                user ? (com.user_id == user.id ? (<button type="pe3" className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-300 " onClick={async () => Update2(com.id)} >Edit</button>) : <></>) : <></>
              }
              <h6> {"Le " + new Date(com.updated_at).getDate() + "-" + (new Date(com.updated_at).getMonth() + 1) + "-" + new Date(com.updated_at).getFullYear() + " à " + new Date(com.updated_at).getHours() + "h" + new Date(com.updated_at).getMinutes()} </h6>

            </div>
          ))
          }
        </div>
      </div>

    </>
  )
}
