function selectReceipe(id,setData)
{
    fetch(`http://localhost:8000/receipies/${id}`).then(res=>res.json()).then(res=>setData(res))
}

export const List = ({listData,i,setData})=>{
    
    return (
       <>
       <h3>RECEIPE {i}</h3>
          <li onClick={()=>selectReceipe(listData.id,setData)}><span>TITLE:</span> {listData.title}</li><li><span>TIME TO COOK:</span> {listData.time}</li>
        </>
    )
}
export const Details = (data)=>{
    console.log(data.data.title)
    return <>
    <h1>FULL BRIEF ABOUT THE RECIPE</h1>
          <div className="receipe-brief">
               <div>TITLE OF THE RECIPE : {data.data.title}</div>
               <div>Ingredients OF THE RECIPE : {data.data.ingredients}</div>
               <div>Time to cook THE RECIPE : {data.data.time}</div>
               <div>Instructions OF THE RECIPE : {data.data.instructions}</div>
               <div>Image OF THE RECIPE : <img src="https://foodish-api.herokuapp.com/images/dosa/dosa56.jpg" alt="" srcset="" /></div>
         </div>  
    </>
}

