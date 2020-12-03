import styles from '../styles/Home.module.css'

export default props => {
    console.log(props)
    return (
        <a href="#" className={styles.posicionaBotao}>
            <img src="play.png" onClick={teste} className={styles.botaoProximo}></img>
            
            
            </a>
    )
}


function teste(){
    alert('a')
}