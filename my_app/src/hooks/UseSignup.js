import { useState , useEffect} from "react";
import { projectAuth } from "../firebase/Config";
import { UseAuthContext } from "./UseAuthContext";


export const UseSignup =() =>{
    const [isCancelled,setIsCancelled] = useState(false)
    const [error,setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = UseAuthContext()

    const signup = async (email, password, displayName) =>{
        setError(null)
        setIsPending(true)
    

    try{
        //signup user
        const res= await projectAuth.createUserWithEmailAndPassword(email,password)
        

        if(!res){
            throw new Error('could not complete signup')
        }

        //add diaplay name to the user.
        await res.user.updateProfile({ displayName})

        //dispatch login action
        dispatch({type:'LOGIN', payload: res.user})

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
        return ()=> setIsCancelled(true)
    },[])
return { error, isPending, signup}
}
