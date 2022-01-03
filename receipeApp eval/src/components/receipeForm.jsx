

import { useEffect, useState } from "react";
import { List } from "./listItems";
import { getReceipe } from "./scripts";
import { Details } from "./listItems";

export const Form = () => {

    const [data, setData]  = useState([]);
    const [arrayData, setArrData] = useState([]);
    const [detail, setDetails] = useState([]);

       useEffect(()=>{
             getReceipe('http://localhost:8000/receipies',setArrData)
       },[])

 const captureChanges = (e)=>{
       setData({
        ...data,
          [e.target.name] :e.target.value
       })
 }
 const postReciepe = (data)=>{
       
    fetch('http://localhost:8000/receipies',{
        method : "POST",
        body:JSON.stringify(data),
        headers : {
            'content-type': 'application/json'
        }
    }).then(res => res.json()).then(res =>console.log(res)).then(getReceipe('http://localhost:8000/receipies',setArrData))
 }

 const submitChanges = (e)=>
 {
    e.preventDefault();
      postReciepe(data)  
 }
 const sortFunc = (e)=>{
   console.log(e.target.value)
       if(e.target.value == 'htol')
       {
         getReceipe(`http://localhost:8000/receipies?_sort=time&order=desc`,setArrData)
       }else if(e.target.value == 'ltoh')
       {
         getReceipe(`http://localhost:8000/receipies?_sort=time&order=asc`,setArrData)
       }
 }
  return (
    //title, ingredients, time to cook, an image and instructions.
    <>
      <div className="container">
        <form onSubmit={submitChanges}>
          <h1>FORM</h1>
          <input onChange={captureChanges} type="text" placeholder="Enter title of Receipe" name="title" />
          <input onChange={captureChanges} type="text" placeholder="Enter ingredients of Receipe" name="ingredients"/>
          <input onChange={captureChanges} type="number" placeholder="Enter time to cook" name="time"/>
          <input onChange={captureChanges} type="text" placeholder="Enter instructions" name="instructions"/>
          <div>
            upload an image <input onChange={captureChanges} type="file" name="image"/>
          </div>
          <input type="submit" value="Sumbit" />
        </form>
        <div className="scrollCards">
          <select onChange={sortFunc} name="" id="">
            <option value="">SORT VIA TIME TO COOK</option>
            <option value="htol">HIGH TO LOW</option>
            <option value="ltoh">LOW TO HIGH</option>
          </select>
            <ul>
            {arrayData.map((data,i) =>{
               return  <List listData ={data} i ={i} key={i} setData = {setDetails}/>
            })}
            </ul>
        </div>
      </div>
      <div className="details">
            {detail.title?<Details data = {detail}/>:null}
      </div>
    </>
  );
};
