import styles from '../styles/Home.module.css'
import supabase from '../supabase'

import { useRouter } from 'next/router'
import UserContext from '../components/UserContext'
import { useContext } from 'react'


export default function AjouterPays() {

    const router = useRouter()
    const { user, logout, loading } = useContext(UserContext)

    
    async function handleSubmit(event) {
        
        event.preventDefault();
        const equipe = event.target.equipe.value;
        const compo = event.target.Composition.value;
        const Entraineur = event.target.Entraineur.value;
        const victoire = event.target.victoire.value;
        const {data,error}= await supabase.from('equipe').select("*").eq('nom', equipe).single()

        if(data==null)
        {
                const { error } = await supabase.from('equipe')
                .insert({ nom: equipe, coach:Entraineur,flag:victoire,creator: user.id })
                alert("L'equipe a bien été ajoutée")
                router.push('/equipe')
        }else
        {
            alert("L'equipe est deja dans la bdd")
        }
      
      }
  return (

    <div>
<form onSubmit={handleSubmit}>

<div className={styles.inputgroupA}>
    <label>Nom de l'équipe</label>
    <input type="text" name="equipe" /> <br/>
   
</div>


<div className={styles.inputgroupA}>
    <label>Composition</label>
    <input type="text" name="Composition" /> <br/>
   


</div>

<div className={styles.inputgroupA}>
    <label>Entraineur</label>
    <input type="text" name="Entraineur" /> <br/>


</div>

<div className={styles.inputgroupA}>
    <label>Dernière victoire</label>
    <input type="text" name="victoire" /> <br/>
   

</div>

<div className={styles.inputgroupA}>
<label>Continent</label>
       <select name="categorie" className={styles.liste}>

           <option value="amerique" >Amérique</option>
           <option value="Europe">Europe</option>
           <option value="Asie">Asie</option>
           <option value="Afrique">Afrique</option>

       </select>
       </div>

    <div className={styles.inputgroupA}>
         <button type="submit" name="Add" className={styles.btnA}>Ajouter</button>
    </div>
</form>
</div>

  )
  
}

