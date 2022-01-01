import { useEffect, useState } from "react"



export const Timer = ({i, end})=>{
    
    const [counter, SetNew] = useState(i);
    
    useEffect(()=>{
     const id =  setInterval(()=>{
             SetNew((p) => {
                 if(p == end)
                 {
                     clearInterval(id)
                     return end 
                 }
               return Number(p)+1})
         },1000);
         return ()=>{
             //Unmounting
             console.log('unmounting');
             clearInterval(id)
           }
    },[] )
    return (
        <>
         <div>Counter: {counter}</div>
        </>
    )
}