import styles from '../styles/Home.module.css'

export default function Footer(props) {
  return (
    <div className={props.darkMode ?"header2":props.orangeMode?"header3":props.greenMode?"header4":props.blueMode?"header5":"header"}>
      <footer className={styles.footer}>
        <a>
          Powered by Farès and Lydia
        </a>
      </footer>
        </div>
  )
}
