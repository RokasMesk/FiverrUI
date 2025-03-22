import styles from './mainPage.module.css'
import Header from '../../components/Header/Header'

const MainPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <main>
                Hi
            </main>
        </div>
    )
}

export default MainPage