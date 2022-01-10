
import { Link } from "react-router-dom"
export const Navbar = ()=>{
    return <>
       <div id='navbar'>
       <h1>Routing Demo</h1>
        <ul>
            <li><Link to='/' style={{textDecoration: 'none' ,alignItems:'center'}}>Home</Link></li>
            <li><Link to='/products'style={{textDecoration: 'none'}}>Products</Link></li>
        </ul>
       </div>
    </>
}