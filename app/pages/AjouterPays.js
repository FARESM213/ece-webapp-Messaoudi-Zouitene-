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
        const Entraineur = event.target.Entraineur.value;


        const compo = event.target.Composition.value;
     
        const victoire = event.target.victoire.value;

        /// Recuperer les valeurs du  reste des formes de la meme maniere que juste au dessus

        const {data,error}= await supabase.from('equipe').select("*").eq('nom', equipe).single()

        if(data==null)
        {
                const { error } = await supabase.from('equipe')
                .insert({ nom: equipe, coach:Entraineur,flag:victoire,user_id: user.id }) /// Ici juste assigner les valeurs au truck de la base de donnes ( par exemple dans la bdd le nom de lequipe c'est "nom" et je lui donne la valeur "equipe")
                alert("L'equipe a bien été ajoutée")
                router.push('/equipe')
        }else
        {
            alert("L'equipe est deja dans la bdd")
        }
      
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
        </form>
  )
  
}

