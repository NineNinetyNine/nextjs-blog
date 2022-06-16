import styles from './layout.module.css';

export default function Navbar(){
    return(
        <nav class={ styles.nav }>
            <ul class={ styles.ul }>
                <li class={ styles.li }><a class={ styles.a }href="">About</a></li>
                <li class={ styles.li }><a class={ styles.a } href="">Products</a></li>
                <li class={ styles.li }><a class={ styles.a } href="">Our Team</a></li>
                <li class={ styles.li }><a class={ styles.a } href="">Contact</a></li>
                <li class={ styles.li }><a class={ styles.a } href="">Privacy</a></li>
            </ul>
        </nav>
    )
}