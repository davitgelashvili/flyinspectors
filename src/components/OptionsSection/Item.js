import styles from "./OptionsSection.module.scss"


const Item = ({title, desc, icon}) => {
    return (
        <div className={styles.item}>
            <div className={`${styles.item__head} d-flex align-center`}>
                <img src={icon} alt="icon" />
                <h3 className={styles.item__title}>{title}</h3>
            </div>
            <p className="item__desc">
                {desc}
            </p>
        </div>
    )
}

export default Item



  