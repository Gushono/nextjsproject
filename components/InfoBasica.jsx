import React from 'react'
import styles from '../styles/Home.module.css'


export default props => {
    console.log(props)
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Bem vindo!
           </h1>
            <h1 className={styles.title}>
                Me chamo: <a>Gustavo Honorato</a>
            </h1>
        </main>
    )
}