import styles from './index.module.css'
import logo from "../../assets/logo.svg"

const Nav=()=>{

    return(
        <>
        <div className={styles.body}>
            <div>
                <img className={styles.logo} src={logo}/>
            </div>


            <div className={styles.rest}>
                <span>Home</span>
                <span>About</span>
                <span>Contacts</span>
            </div>
        </div>
        </>
    )
}

export default Nav