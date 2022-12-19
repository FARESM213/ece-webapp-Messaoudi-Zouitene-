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

          <form className={styles.addteamform}>
            <label htmlFor="name">Nom de l'équipe :</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="Coatch">Coatch :</label>
            <input type="text" id="Coatch" name="Coatch" required />
            <label htmlFor="anglais">Nom en anglais :</label>
            <input type="text" id="anglais" name="anglais" required />
            <label htmlFor="anglais">Listes des joueurs :</label>
            <input type="text" id="joueurs" name="joueurs" required />
            <label htmlFor="anglais">Composition équipe :</label>
            <input type="text" id="Composition" name="Composition" required />
            <label>Continent</label>
       <select name="categorie" className={styles.liste}>
           <option value="amerique" >Amérique</option>
           <option value="Europe">Europe</option>
           <option value="Asie">Asie</option>
           <option value="Afrique">Afrique</option>
       </select>
            <label htmlFor="logo">Logo :</label>
            <input type="file" id="logo" name="logo" accept="image/*" required />
            <button type="submit">Ajouter l'équipe</button>
          </form>
      

  )
  
}

