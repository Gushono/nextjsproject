import React from 'react'
import styles from '../styles/Home.module.css'
import BotaoProximasInfo from '../components/BotaoProximasInfo'


export default props => {
    console.log(props)
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Bem vindo!
           </h1>
            <h1 className={styles.title}>
                Me chamo: <a href="https://www.linkedin.com/in/gustavo-honorato-nic/">Gustavo Honorato</a>
            </h1>
            <BotaoProximasInfo></BotaoProximasInfo>
        </main>
    )
}