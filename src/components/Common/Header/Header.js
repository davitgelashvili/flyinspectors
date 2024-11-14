import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.navbar}>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Logo />

                    </div>
                    <div className="col-8">
                        <Menu />
                    </div>
                    <div className="col-2">
                        <button>send form</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
