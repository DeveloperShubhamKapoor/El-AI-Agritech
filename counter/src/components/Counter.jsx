import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CountContext } from "../context/CountContext"

export const Counter = ()=>{

    const {count,setCount} = useContext(CountContext)
    const navigate = useNavigate()
    const addCount=()=>{
        setCount(count+1)
    }
    return (
        <>
            <div>
                Count: {count}
            </div>
            <div>
                <button onClick={addCount}>Increase Count</button>
            </div>
            <div>
                <button onClick={()=>navigate("/nextpage")}>Go to next Page</button>
            </div>
        </>
    )
}