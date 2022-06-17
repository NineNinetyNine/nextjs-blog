import styles from './layout.module.css';

export default function Navbar(){
    return(
        <nav className={ styles.nav }>
            <ul className={ styles.ul }>
                <li className={ styles.li }><a className={ styles.a }href="about">About</a></li>
                <li className={ styles.li }><a className={ styles.a } href="">Projects</a></li>
                <li className={ styles.li }><a className={ styles.a } href="">Roadmap</a></li>
                <li className={ styles.li }><a className={ styles.a } href="">Contact</a></li>
            </ul>
        </nav>
    )
}