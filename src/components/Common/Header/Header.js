import Logo from "./Logo/Logo";
import styles from './Header.module.scss'
import SubmitLink from "../../UI/SubmitLink";
import BurgerMenu from "./Menu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { siteTranslateAction } from "../../../store/translate";
import { useEffect } from "react";
import i18n from "../../../i18n/i18n";

function Header() {
    const dispatch = useDispatch()
    const {language} = useSelector( state => state.translate)

    useEffect(()=>{
        i18n.changeLanguage(language)
    }, [dispatch, language])

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <Logo />
                    <BurgerMenu/>
                    <div className="d-flex align-items-center">
                        <SubmitLink className={styles.submitlink} />
                        <div className="">
                            {language === 'ka' ? (
                                <button onClick={() => dispatch(siteTranslateAction.changeLanguage('en'))}>
                                    Eng
                                </button>
                            ) : (
                                <button onClick={() => dispatch(siteTranslateAction.changeLanguage('ka'))}>
                                    Geo
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
