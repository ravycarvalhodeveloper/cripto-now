import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Link to="/">
            <header className={styles.container}>
                <h1 className={styles.logoh1}>Cripto<span>Now</span></h1>
            </header>
        </Link>
     
    )
}