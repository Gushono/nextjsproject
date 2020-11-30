import styles from '../styles/Home.module.css'

export default props => {
    console.log(props)
    return (
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/gustavo-honorato-nic/"> 
          Desenvolvido por Gustavo Honorato
        </a>
      </footer>
    )
}
