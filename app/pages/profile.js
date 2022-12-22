import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Head from 'next/head'
import UserContext from '../components/UserContext'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import MD5 from 'crypto-js/md5';
import Link from 'next/link'
import { useUser } from 'supabase-comments-extension'

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
  const { user, logout, loading,teams,comments,update} = useContext(UserContext)
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
    loadData()

  }, [session])

  async function loadData() {
    if(user) {
       console.log("in 1st if")
       const { data, error } = await supabase
       .from('profiles')
       .select('email')
       .eq('id',user.id)
       .single()
       if(error) throw error
       if(!data.email) {
          await supabase
          .from('profiles')
          .update({email:user.email})
          .eq('id', session.user.id)
       }
    }
 }

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

    let { data, error, status } = await supabase.from('equipe').select("*").eq('user_id', id).order('nom', { ascending: true })
    setTeams((data))
  }

  async function getComments(id)
  {
    let { data, error, status } = await supabase.from('comments').select("*").eq('user_id',id).order('updated_at', { ascending: false })
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
      let { error:error2 } = await supabase.from('comments').update({user_username:username}).eq('user_id',user.id)
      if (error) throw error
      alert('Profile updated!')
      getProfile()
      getComments(user.id)
      router.push("/Login")

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

  router.push("/comments/"+id)
}


async function Delete(id) {
              
  const { error } = await supabase.from('equipe').delete().eq('id', id)
  alert('Equipe supprimé')

  getTeams(user.id)
  router.push('/profile')

}

async function Update(id) {
  router.push('/edit/'+id)

}


  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { !(user || loading) ?

        <p>Redirecting...</p>
        :
        <div> 
        
        
        <div class="grid grid-rows-2 grid-flow-col gap-4">
          <div class="row-span-3">


          <div className={styles.userform2}>
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


          </div>

            
                <div class="col-span-2" className={styles.decale} >
                <div className={styles.userform3} >
                          <h2> Espace Commentaires :  </h2>
                        <div className={styles.scroll2}>

                                {user_comments ? user_comments.map(com => (
                                                                      <div className="card2" key={com.id}>            
                                                                       <img type='yesbb' src={"https://flagcdn.com/w2560/"+Loadflag(com.equipe_nom,flag)+".jpg"} width="50" length="50" /> 
               
                                                                       <img className={styles.round} src={"https://www.gravatar.com/avatar/"+MD5(com.user_email)} width="100" length="100" />  
                                                                        <h1 >{com.user_username} : </h1>

                                                                        <p type="p1"> {com.content}    </p> 
                                                                                { com.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-300 " onClick={async()=>Delete2(com.id)} > Delete </button>):<></>}
                                                                                { com.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-300 "onClick={async()=>Update2(com.id)} >Edit</button>):<></>}
                                                                    
                                                                         <h6> {"Le "+new Date(com.updated_at).getDate()+"-"+(new Date(com.updated_at).getMonth()+1)+"-"+new Date(com.updated_at).getFullYear()+" à "+new Date(com.updated_at).getHours()+"h"+new Date(com.updated_at).getMinutes()} </h6> 

                                                                      </div>

                                                                                                                     
                                                                    )): <></>
                                }

                                </div>
                    </div>

                </div>
                <div class="row-span-2 col-span-2" className={styles.decale2}>
                      <div className={styles.userform3} >

                            <h2> Espace Equipe :  </h2>

                            {
                                    user?<button className={styles.yes2} onClick={async()=>router.push("/AjouterPays")} > Add + </button>: <button className={styles.yes2} onClick={async()=>router.push("/Login")} > Connect </button>
                            }
                                        
                            <div className={styles.scroll2}>
                                    {user_teams ? user_teams.map(equipe => (
                                              <div className="card2"key={equipe.id}>
                                                      <img type='yesbb' src={"https://flagcdn.com/w2560/"+Loadflag(equipe.nom,flag)+".jpg"} width="50" length="50" />  
                                                      <h2><Link href={"/equipe/"+equipe.id}>Detail de l'equipe</Link></h2> 
                                                          <h5 type="equipe">Nom : {equipe.nom}</h5>
                                                          <h5 type="equipe">Coach : {equipe.coach}   </h5>     

                                                          { equipe.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-300 " onClick={async()=>Delete(equipe.id)} > Delete </button>):<></>}
                                                          { equipe.user_id==user.id?(<button className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-300 "onClick={async()=>Update(equipe.id)} >Edit</button>):<></>}        
                                              </div>
                                    )): <></>}

                            </div>
                        </div>
                </div>
        </div>
        </div>

      }
    </>
  )
}
