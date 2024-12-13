import { useSelector } from "react-redux"
import styles from "./ServicesOptions.module.scss"
import { useEffect, useState } from "react"


const Item = ({title, desc}) => {
    const { language } = useSelector(state => state.translate)
    const [lang, setLang] = useState('')

    console.log('language:', language)
    useEffect(() => {
        setLang(language)
        console.log('language:', language)
        console.log('lang:', lang)
    }, [language])
    return (
        <div className={styles.item}>
            <h3 className={styles.item__title}>{title[lang]}</h3>
            <p className={styles.item__desc}>
                {desc[lang]}
            </p>
        </div>
    )
}

export default Item
