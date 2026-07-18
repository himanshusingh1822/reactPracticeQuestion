import { useEffect } from "react";

export default function useClickOutside (modelRef,isClose){


    useEffect(()=>{
        const cb = (e)=>{
            if (modelRef.current && !modelRef.current.contains(e.target) && e.target.closest('.modelWrapper')){
                isClose();
            }

        }
        document.addEventListener('click',cb)
        return ()=>{
            document.removeEventListener('click',cb);
        }
    },[modelRef,isClose])
}