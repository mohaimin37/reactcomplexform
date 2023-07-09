import { useState } from "react";

const App = () =>{
    const submit = (event)=>{

        event.preventDefault();
    }
    const[initial,final] = useState({
        fname:"",
        lname:"",
        ename:"",
        pname:"",
    })

    const change = (event)=>{
        const value = event.target.value;
        const name = event.target.name;
        final((event)=>{
      
        if(name ==="fname")
        return{
            fname:value,
            lname: event.lname,
            ename:event.ename,
            pname:event.pname,

        }
       else if(name ==="lname")
        return{
            fname:event.fname,
            lname: value,
            ename:event.ename,
            pname:event.pname,

        }
      else  if(name ==="ename")
        return{
            fname:event.fname,
            lname: event.lname,
            ename:value,
            pname:event.pname,

        }
        else if(name ==="pname")
        return{
            fname:event.fname,
            lname: event.lname,
            ename:event.ename,
            pname:value,

        }




        })

    }
    return(<>
        <div>
            <h1>hi {initial.fname}  <br></br> {initial.lname}  <br></br>  {initial.ename}  {initial.pname}</h1>
            <form onSubmit={submit}>
                <input 
                type="text" placeholder="enter your firstname name" onChange={change} value={initial.fname} name="fname"></input><br></br> <br></br> <br></br> 
                   <input 
                type="text" placeholder="enter your lastname name" onChange={change} value={initial.lname} name="lname"></input>   <br></br> <br></br> <br></br> <input 
                type="text" placeholder="enter your email address" onChange={change} value={initial.ename} name="ename"></input>  <br></br> <br></br> <br></br>  <input 
                type="text" placeholder="enter your password" onChange={change} value={initial.pname} name="pname"></input>
                <br></br> 

            </form>
        </div>
    </>)
}
export default App;