import { useState } from "react";
import { TodoInput } from "./GroceryInput";
import { TodoItem} from "./GroceryList"

export const Todo = () => {
    const [list, setList] = useState([]);

    const handleClick = (data) => {

        const payLoad = {
            title: data,
            status: false
        }
        setList([...list, payLoad]);
    };
    const deleteItem = (i)=>{
        list.splice(i,1);
        setList([...list])
    }
    return (
        <>
            <TodoInput getData={handleClick} />
            <h3>ITEMS LIST</h3>
            {list.map((e,i) => (
              <p>
             <TodoItem key={i} title={e.title}/>
             <button onClick={()=>deleteItem(i)}>DELETE</button>
             </p>
            ))}
            
        </>
    );
};