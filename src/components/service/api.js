import axios from "axios";
import react from "react";


  const baseURL="https://jsonplaceholder.typicode.com/"
  // https://jsonplaceholder.typicode.com/users/:id

  export const todoListApi=()=>{
   return axios({ 
      method:"get",
      url:`${baseURL}todos`
    })
 
  }
  export const userDetail=(id)=>{
    return axios({ 
       method:"get",
       url:`${baseURL}users/${id}`
     })
  
   }
 