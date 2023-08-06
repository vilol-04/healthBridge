import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/Config";
import { UseAuthContext } from "./UseAuthContext";


export const UseLogin =() =>{
    const [isCancelled,setIsCancelled] = useState(false)

    const [error,setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = UseAuthContext()

    const login = async (email, password) =>{
        setError(null)
        setIsPending(true)
    

    try{
        const res=await projectAuth.signInWithEmailAndPassword(email, password)

        //dispatch login action
        dispatch({type:'LOGIN',payload: res.user })

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
return { error, isPending, login}
}
