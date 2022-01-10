import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
export const Products = ()=>{
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
      },[]); 
      const fetchData =()=>{
        fetch('http://localhost:8000/products').then(res=>res.json()).then(res => setData(res));
        console.log('HEllo');
      }
      console.log(data);
    return <>
        {data.map((e,i)=>(
            <div key={i} style={{display:'flex',margin:'30px',alignItems:'center'}}>
                  <h2>Product : {e.name}</h2>
                <Link to={`/products/${e.id}`} style={{textDecoration:'none'}}><button className='btn'>CLICK HERE TO GET DETAILS</button></Link>
            </div>
        ))}
    </>
}