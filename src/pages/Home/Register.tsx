import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
export default function Register(){
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const url='https://jsonplaceholder.typicode.com';
 const handleRegister=(event:any)=>{
    event.preventDefault();
    const formdata=new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("password",password);
    try{
    axios.post(`${url}/users`,formdata).then(response=>{console.log(response.data,"registration successful")})
    } 
    catch(error){
        toast.error("error while saving the data");

    }
}
return (
    <div>
        <form action="" method="post" onSubmit={handleRegister}>
    <label className="block text-xl font-medium leading-6 text-gray-900" htmlFor="">name</label>
    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="e=name" onChange={(e)=>setName(e.target.value)} type="text" />
    <label className="block text-xl font-medium leading-6 text-gray-900" htmlFor="">email</label>
    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="email" onChange={(e)=>setEmail(e.target.value)} id="" />
    <label className="block text-xl font-medium leading-6 text-gray-900" htmlFor="">password</label>
    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="password" name="password" id="" onChange={(e)=>setPassword(e.target.value)} />
    <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          valider
        </button>
    </form>
    </div>
)
}