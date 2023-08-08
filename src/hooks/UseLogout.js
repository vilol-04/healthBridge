import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/Config";
import { UseAuthContext } from "./UseAuthContext";


export const UseLogout =() =>{
    const [isCancelled,setIsCancelled] = useState(false)

    const [error,setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = UseAuthContext()

    const logout = async (email, password, displayName) =>{
        setError(null)
        setIsPending(true)
    

    try{
        await projectAuth.signOut()

        //dispatch login action
        dispatch({type:'LOGOUT' })

        //update state
        if(!isCancelled){
            setIsPending(false)
            setError(null)
        }
       
    }
    catch (err){
        if(!isCancelled){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }

    }
    }

    useEffect(()=>{
        return()=> setIsCancelled(true)
    },[])
return { error, isPending, logout}
}
