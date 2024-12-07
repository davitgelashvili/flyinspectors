import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const UserEdit = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    const [update, setUpdate] = useState(true)
    const [value, setValue] = useState('')

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/client`, {
            method: "GET",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        })
        .then((res) => res.json())
        .then(res => {
            console.log(res)
            const x = res.filter(item => item.userId == id)
            setData(...x)
        })
    }, [update])

    function handlClick (e) {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/client/id`, {
            method: "PUT",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userId: id,
                status: value
            })
        })
        .then((res) => res.json()).finally(()=>{
            setUpdate(!update)

        })
    }

    return (
        <div className="container">
            <div className="col-lg-6">
                <div>
                    <h2>{data.firstName} {data.lastName}</h2>
                    <h2><strong>status:</strong>{data.status}</h2>
                    <div className="d-flex">
                        <select onChange={(e)=> setValue(e.target.value)}>
                            <option value={''}>choose status</option>
                            <option value={'Application received'}>Application received</option>
                            <option value={'Case proceedings initiated'}>Case proceedings initiated</option>
                            <option value={'Rejected by the airline'}>Rejected by the airline</option>
                            <option value={'Transferred to the legal department'}>Transferred to the legal department</option>
                            <option value={'Case appealed to a higher authority'}>Case appealed to a higher authority</option>
                            <option value={'Case is pending in court'}>Case is pending in court</option>
                            <option value={'Case successfully closed'}>Case successfully closed</option>
                            <option value={'Case closed'}>Case closed</option>
                        </select>
                        <button onClick={handlClick}>edit</button>
                    </div>
                    <h2><strong>user ID:</strong>{data.userId}</h2>
                    <p><strong>emaill:</strong>{data.email}</p>
                    <p><strong>phone:</strong>{data.phone}</p>
                    <p><strong>address:</strong>{data.date}</p>
                    <p><strong>date:</strong>{data.date}</p>
                    <p><strong>city:</strong>{data.city}</p>
                    <p><strong>flightNumber:</strong>{data.flightNumber}</p>
                    <p><strong>problem:</strong>{data.problem}</p>
                    <p><strong>description:</strong>{data.description}</p>
                    <img src={data.signature} alt='res' />
                </div>
            </div>
        </div>
    )
}

export default UserEdit