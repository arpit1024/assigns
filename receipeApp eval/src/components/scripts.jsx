
export const getReceipe = (url,setArrData)=>{
    fetch(url).then(res=>res.json()).then(res=>setArrData(res))
}