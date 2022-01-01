export const ROW = ({data,handleDelete})=>{
    console.log("Row", data);
          return(
              <tr>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.adress}</td>
              <td>{data.department}</td>
              <td>{data.salary}</td>
              <td>{data.marital?"MARRIED":"UNMARRIED"}</td>
              <td>{data.photo}</td>
              <td><button onClick={()=>handleDelete(data.id)}>DELETE</button></td>
              </tr>
          )
   }