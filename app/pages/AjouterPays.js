import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'




export default function AjouterPays() {
    async function handleSubmit(event) {
        event.preventDefault();
    
        const email = event.target.email.value;
        await supabase.auth.signIn({ email });
    
      }
  return (

    <div>
<form onSubmit={handleSubmit}>

<div className={styles.inputgroupA}>
    <label>Nom de l'équipe</label>
    <input type="text" name="équipe" /> <br/>
   
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

