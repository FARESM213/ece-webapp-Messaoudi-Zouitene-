import styles from '../styles/Home.module.css'
import supabase from '../supabase'
import { useRouter } from 'next/router'
import UserContext from '../components/UserContext'
import { useContext } from 'react'


export default function AjouterPays() {

    const router = useRouter()
    const { user, logout, loading } = useContext(UserContext)
    const compo = ['3-1-4-2', '3-4-1-2', '3-4-2-1','3-4-3','3-5-1-1','3-5-2','4-1-2-1-2','4-1-3-2' ,'4-1-4-1','4-2-2-2','4-2-3-1','4-2-4','4-3-1-2','4-3-2-1','4-3-3','4-4-1-1','4-4-2','4-5-1','5-2-1-2','5-2-2-1','5-2-3','5-3-2','5-4-1'];
    const continent = ['Amérique', 'Asie', 'Afrique', 'Europe'];

    async function handleSubmit(event) {
        
        event.preventDefault();
        const equipe = event.target.name.value;   
        const Entraineur = event.target.Coatch.value;
        const compo = ""+document.querySelector('#compo').value;
        const victoire = event.target.anglais.value;
        const continen = ""+document.querySelector('#continent').value;
        const players = event.target.joueurs.value;

        /// Recuperer les valeurs du  reste des formes de la meme maniere que juste au dessus

        const {data,error}= await supabase.from('equipe').select("*").eq('nom', equipe).single()

        if(data==null)
        {
                const { error } = await supabase.from('equipe').insert({ nom: equipe, coach:Entraineur,flag:victoire,user_id: user.id, Composition:compo,Continent:continen,Liste_joueurs:players}) /// Ici juste assigner les valeurs au truck de la base de donnes ( par exemple dans la bdd le nom de lequipe c'est "nom" et je lui donne la valeur "equipe")
               
                if(error) 
                {
                    alert("Une erreur est survenue lors de l'insertion de votre equipe")
                }
                else
                {
                    alert("L'equipe a bien été ajoutée")
                    router.push('/equipe')
                }

        }else
        {
            alert("L'equipe est deja dans la bdd")
        }
      
      }
  return (

        <form className={styles.addteamform} onSubmit={handleSubmit} >

            <label htmlFor="name">Nom de l'équipe :</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="Coatch">Coach :</label>
            <input type="text" id="Coatch" name="Coatch" required />
            <label htmlFor="anglais">Nom en anglais :</label>
            <input type="text" id="anglais" name="anglais" required />
            <label htmlFor="anglais">Listes des joueurs :</label>
            <input type="text" id="joueurs" name="joueurs" required />
            <label htmlFor="anglais">Composition équipe :</label>
            <select  type="text" id="compo" name="compo">
            {compo.map(compo => (
            <option type="text" value={compo} key={compo}>{compo}</option>
             ))}
            </select>


            <label htmlFor="anglais">Continent :</label>
            <select  type="text" id="continent" name="continent">
            {continent.map(continent => (
            <option type="text" value={continent} key={continent}>{continent}</option>
             ))}
            </select>

            <button type="submit">Ajouter l'équipe</button>
        </form>
  )
  
}

