import {useState } from "react"
import SendForm from "./SendForm"
import SearchForm from "./SearchForm"
import styles from './form.module.scss'
import ContactSubmitPage from "./ContactSubmitPage"
import Map from "./Map"
const Form = () => {
    const [formActive, setFormActive] = useState(true)

    return (
        <div className="container" >
            <div  className={`${styles['form']}`} style={{marginTop:"20px", marginBottom:"40px"}}>
                <div className={`${styles['form__head']}`}>
                    <div className={`${styles['form__head--btn']} ${formActive && styles['active']}`} onClick={() => setFormActive(true)}>
                        Fill Form
                    </div>
                    <div className={`${styles['form__head--btn']} ${!formActive && styles['active']}`}  onClick={() => setFormActive(false)}>
                        Check The Status
                    </div>
                </div>
                <div className={`${styles['form__body']}`}>
                    {
                        formActive ? (
                            <SendForm setFormActive={setFormActive} />
                        ) : (
                            <SearchForm />
                        )
                    }
                </div>
            </div>
            <div className="row" style={{marginBottom:"40px"}}>
                <div className="col-lg-6">
                    <ContactSubmitPage/>
                </div>
                <div className="col-lg-6">
                    <Map/>
                </div>
            </div>
        </div>
    )
}

export default Form