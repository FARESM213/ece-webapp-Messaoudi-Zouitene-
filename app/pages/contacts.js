import styles from '../styles/Home.module.css'


export default function contacts() {
  return (
    <div className={styles.divvv}>

      <form className={styles.addteamform2} >

        <label htmlFor="name">Nom  :</label>
        <input type="text" id="name" name="name" value="Farès Messaoudi" />

        <br />
        <label htmlFor="name">Position  :</label>
        <input type="text" id="Position" name="Position" value="Co-fondateur" />
        <br />
        <label htmlFor="name">Num  :</label>
        <input type="text" id="Num" name="Num" value="06-25-65-95-32" />
        <label> Bio :
          <input name="bio" value="Ouais ouais l'équipe."></input>
        </label>
      </form>
      <img src="hand.png" alt="Description de l'image" width="600" height="100" />
      <form className={styles.addteamform2} >
        <label htmlFor="name">Nom  :</label>
        <input type="text" id="name" name="name" value="Lydia Zouitene" />

        <br />
        <label htmlFor="name">Position  :</label>
        <input type="text" id="Position" name="Position" value="Co-fondatrice" />
        <br />
        <label htmlFor="name">Num  :</label>
        <input type="text" id="Num" name="Num" value="06-65-26-47-30" />
        <label> Bio :
          <input name="bio" value="Ouais ouais la team."></input>
        </label>

      </form>
      <br/>

    </div>



  )
}
