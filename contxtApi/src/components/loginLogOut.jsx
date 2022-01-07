import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";


export const Logs = () => {
  const {authController} = useContext(AuthContext);
  
  const registerUser = (e)=>{
    e.preventDefault()
    let data = {
        "email":e.target.email.value,
        "password":e.target.password.value
    }
    fetch('https://reqres.in/api/login', {
        method: "POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>res.json()).then(res=>authController(res.token)).catch(e =>{console.log(e)})
}
  return  <div>
  <h1>Login Form</h1>
  <form onSubmit={registerUser}>
      <input type="text" placeholder="ENTER EMAIL" name="email"/>
      <input type="password" placeholder="ENTER PASSWORD" name="password"/>
      <input type="submit" value="LOGIN"/>
  </form>
</div>;
};
