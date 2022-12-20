import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Head from 'next/head'
import UserContext from '../components/UserContext'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import MD5 from 'crypto-js/md5';

export const getStaticProps =async ()=>{
  const res= await fetch("https://flagcdn.com/fr/codes.json")
  const dat= await res.json();

  return {
    props:{flag : dat}

  }
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


export default function Contact({flag}) {

  const session= useSession()
  const { user, logout, loading,teams,comments} = useContext(UserContext)
  const router = useRouter()
  useEffect(() => {
    if (!(user || loading)) {
      router.push('/Login')
    }
  }, [user, loading, router])
  const onClickLogout = function() {
    logout()
  }
      
  const supabase = useSupabaseClient()
  const [load, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const [user_comments, setComment] = useState(null)
  const [user_teams, setTeams] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {

      setLoading(true)
      let { data, error, status } = await supabase
        .from('profiles')
        .select("*")
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }
      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }    
      
      getComments(user.id)
      getTeams(user.id)

    } catch (error) {
      //console.log(error)
    } finally {
      setLoading(false)
    }

  }

  async function sameImages(mail) {
    const session = useSession()
    const a = new Image()
    a.crossOrigin="anonymous"
    const b = new Image()
    b.crossOrigin="anonymous"
    a.src = 'https://www.gravatar.com/avatar/' + MD5(mail)
    b.src = 'https://www.gravatar.com/avatar/'
  
    // might need to wait until a and b have actually loaded, ignoring this for now
    const a_base64 = getBase64Image(a)
    const b_base64 = getBase64Image(b)
    var c = "" 
  
  
    if (a_base64 === b_base64) 
    {
      c='https://www.gravatar.com/avatar/78fd7fd27f60bc9dd10d42c293a2f71a '
    }
    else 
    {
        c ='https://www.gravatar.com/avatar/' + MD5(mail)
    }

    console.log(c)
    
    return c.toString 
  }

  

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


  async function getTeams(id) {

    let { data, error, status } = await supabase.from('equipe').select("*").eq('user_id', id)
    setTeams((data))
  }

  async function getComments(id)
  {
    let { data, error, status } = await supabase.from('comments').select("*").eq('user_id',id)
    setComment((data))
  }

  
  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        email: user.email,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)    
      
      if (error) throw error
      
      alert('Profile updated!')

      setUsername(username)
      getProfile()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function Delete2(id) {
              
    const { error } = await supabase.from('comments').delete().eq('id', id)
    alert('Commentaire supprimé')
    getComments(user.id)

    router.push('/profile')
}




async function Update2(id) {
  alert("Ok pour le moment on fait rien"+id)
}


async function Delete(id) {
              
  const { error } = await supabase.from('equipe').delete().eq('id', id)
  alert('Equipe supprimé')

  getTeams(user.id)
  router.push('/profile')

}

async function Update(id) {
  alert("Ok pour le moment on fait rien"+id)
}


  return (
    <>
      <Head>
        <title>WebTech - user signedin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { !(user || loading) ?

        <p>Redirecting...</p>
        :
        <> 


        <div className={styles.formcontainer}>
          
            <div className={styles.userform}>
                <h2>Information Utilisateur</h2>
                <div className="form-widget">

                <div>
                    <label htmlFor="website">Profil Image</label>
                    <img className={styles.round} src={"https://www.gravatar.com/avatar/"+MD5(user.email)} width="100" length="100" />  
                </div>
                <br/>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={user.email} disabled />
                  </div>
                  
                  <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username || ''} onChange={(e) => setUsername(e.target.value)}/>
                  </div>

                  <div>
                    <label htmlFor="website">Website</label>
                    <input id="website" type="text" value={website || ''} onChange={(e) => setWebsite(e.target.value)}/>
                  </div>
                </div>
                <button className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-300 "  onClick={onClickLogout} > Logout </button>
                <button className="rounded px-5 py-3 text-white bg-green-500 hover:bg-green-300" onClick={async() => updateProfile({ username, website, avatar_url })} disabled={loading} > {loading ? 'Loading ...' : 'Update'}</button>        
            </div>

            <div className={styles.scroll}>

              {user_comments ? user_comments.map(com => (
                                                      <div className={styles.card2}  key={com.id}>
                                                        <img className={styles.round} src={"https://www.gravatar.com/avatar/"+MD5(com.user_email)} width="100" length="100" />  
                                                              Id : {com.id} <br/>
                                                              User_id : {com.user_id}    <br/>
                                                              equipe_id :   {com.equipe_id}  <br/>      
                                                              content : {com.content}      <br/>
                                                              { com.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-300 " onClick={async()=>Delete2(com.id)} > Delete </button>):<></>}
                                                              { com.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-300 "onClick={async()=>Update2(com.id)} >Edit</button>):<></>}
                                                      </div>
                                                  )): <></>
              }

            </div>
                        
            <div className={styles.scroll}>
                    {user_teams ? user_teams.map(equipe => (
                              <div className={styles.card2} key={equipe.id}>
                                      <img src={"https://flagcdn.com/w2560/"+Loadflag(equipe.nom,flag)+".jpg"} width="50" length="50" />  
                                      <h2>Detail de l'equipe</h2>  
                                          <p>Nom : {equipe.nom}</p>
                                          <p>Entraineur : {equipe.coach}   </p>     
                                          { equipe.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-300 " onClick={async()=>Delete(equipe.id)} > Delete </button>):<></>}
                                              { equipe.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-300 "onClick={async()=>Update(equipe.id)} >Edit</button>):<></>}        
                              </div>
                    )): <></>}

            </div>

        </div>

        </>


      }
    </>
  )
}
