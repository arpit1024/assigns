import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import { ROW } from "./tableItem";
import { addTodo } from "./formScript";
import { getTodo } from "./formScript";
export const Form = () => {

    const [data, state] = useState({});
    const [todo, setTodo] = useState([]);
    const [page, setPage] = useState([]);

    useEffect(() => {
        getTodo(`http://localhost:8000/userdata?_page=${page}&_limit=5`,setTodo)
    }, [page])
   
    const handleChange = (e) => {
        const { name, value } = e.target

        state({
            ...data,
            [name]: value,
            id: nanoid()
        })
    }
    const handleDelete = (id)=>{
        console.log(id);
        fetch(`http://localhost:8000/userdata/${id}`,{method:"DELETE"}).then(res=>res.json()).then(res=>console.log(res)).then(()=>{
            getTodo(`http://localhost:8000/userdata?page=${page}&_limit=5`,setTodo);
        })
    }
   
   const dropdwnchange = (e)=>{
         
        if(e.target.value == "sa")
        {
            getTodo(`http://localhost:8000/userdata?_sort=salary&_order=asc&_page=${page}&_limit=5`,setTodo)
        }else if(e.target.value =='sd')
        {
            getTodo(`http://localhost:8000/userdata?_sort=salary&_order=desc&_page=${page}&_limit=5`,setTodo)
        }
   }

    const submitForm = (e) => {
        e.preventDefault();
        addTodo(data,page);
    }
    return (
        <>
           <form onSubmit={submitForm}>
                <input onChange={handleChange} name="name" type="text" placeholder="Enter Name" />
                <input onChange={handleChange} name="age" type="number" placeholder="Enter Age" />
                <input onChange={handleChange} name="adress" type="text" placeholder="Enter Address" />
                <input onChange={handleChange} name="department" type="text" placeholder="Enter Department" />
                <input onChange={handleChange} name="salary" type="number" placeholder="Enter Salary" />
                <div>CHECK IF MARRIED <input onChange={handleChange} type="radio" placeholder="marital state" name="marital" /></div>
                <div>UPLOAD PHOTO <input onChange={handleChange} name="photo" type="file" placeholder="profile photo" /></div>
                 <input type="submit" value="Submit" />
            </form>
            <button disabled={page ===1} onClick={()=>setPage((p) => p-1)}>PREV</button>
            <button onClick={()=>setPage((p) => p+1)}>NEXT</button>
            <select name="" id="" onChange={dropdwnchange}>
                <option value="#">Sort via Salary</option>
                <option value="sa">Ascending order via salary</option>
                <option value="sd">Descending order via salary</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>marital state</th>
                        <th>profile photo</th>
                    </tr>
                </thead>
                <tbody>
                {todo.map((e)=>(
                   <ROW data={e} key={nanoid()} handleDelete = {handleDelete}/>
                ))}
                </tbody>
            </table>
        </>
    )
}