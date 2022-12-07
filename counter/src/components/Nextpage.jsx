import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CountContext } from "../context/CountContext"

export const Nextpage = ()=>{

    const {count} = useContext(CountContext)
    const navigate = useNavigate()
    return (
        <>
            <div>
                Count :{count}    
            </div>        
            <button onClick={()=>navigate("/")}>Go back to Counter</button>
        </>
    )
}