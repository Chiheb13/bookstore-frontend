import { useState } from "react"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
export default function Add(){
const [title,setTitle]=useState("");
const [body,setBody]=useState("");

const handlesave=(event:any)=>{
    event.preventDefault();
    const formdata=new FormData();
    formdata.append("title",title);
    formdata.append("post",body);
    console.log(formdata)
    try{
        axios.post('https://jsonplaceholder.typicode.com/posts', formdata).then(response=>{
            console.log(response.data,"registration successful")
        })
        
    }
    catch (error) {
        toast.error("error while saving the data");
    }
}
    return (
        <div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" action="" onSubmit={handlesave}  method="post">
            <label className="-mb-3" htmlFor="">title</label><br />
                <input className="border-spacing-3 border-black  mt-4 text-center font-normal" value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" /><br />
            <label className="mt-4 text-center font-normal" htmlFor="">body</label><br />
            <input className="border-black  border-spacing-3  mt-4 text-center font-normal" value={body} onChange={(e) => setBody(e.target.value)}  type="text" name="body" />
           <input type="submit" value="add" /> </form>
            
        </div>
    )
}