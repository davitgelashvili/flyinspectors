import styles from './Search.module.scss'
import { useEffect, useState } from "react"
import TextInput from "../UI/TextInput"
import Loading from "../Loading/Loading"
import Progress from './Progress'

const SearchForm = () => {
    const [id, setId] = useState("")
    const [data, setData] = useState()
    const [load, setLoad] = useState(false)
    function handleChange(e){
        e.preventDefault()
        setLoad(true)
        fetch(`${process.env.REACT_APP_API_URL}/id`, {
            method: "POST",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userId: id
            })
        })
        .then((res) => res.json())
        .then(res => {
            setData(...res)
            console.log("save data:", res);
        }).finally(()=>{
            setLoad(false)
        })
    }

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <div className={styles.search}>
            <p className={styles.search__text}>
            Application number (Application number sent to the email address specified in your application)
            </p>
            <TextInput
                  type={"text"}
                  value={id}
                  placeholder={'Enter Aplication number'}
                  name={"id"}
                  icon={''}
                  onChange={e => setId(e.target.value)}
                />
            
                { load ? (
                    <Loading />
                ) : (
                    data && (
                        <Progress status={data?.status}/>
                    )
                )}
            <button className={styles.search__btn} onClick={handleChange}>search</button>
        </div>
    )
}

export default SearchForm