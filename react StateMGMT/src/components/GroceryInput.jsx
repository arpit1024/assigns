import { useState } from "react";

export const TodoInput = ({getData}) =>{

    const [text, setText] = useState('');
    const handleChange = (e)=>{
        console.log(e.target.value)
        setText(e.target.value);
    };
    const handleClick = ()=> {
        getData(text);
    }

    return(
        <>
         <input type="text" placeholder="Enter Item Name" onChange={handleChange}/>
         <button onClick = {handleClick}>Add item</button>
        </>
    )
}