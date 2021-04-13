import axios from 'axios';
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom'
const AddUser=(props)=>{
    const [newUser,setNewUser]=useState({
        username:'',
        password:'',
        firstname:'',
        lastname:'',

    });
    const [Redirection,setRedirection]=useState(false);
    const addUser=(e)=>{
        e.preventDefault();
        
        // console.log(newUser)
        axios.post('http://127.0.0.1:4000/adduser',newUser)
        .then(res=>{
            console.log(res);
        })
        setRedirection(true);
    }

    const inputChangeHandler=(event,type)=>{

        let newValue=event.target.value;
        const newStateUser={...newUser};
        newStateUser[type]=newValue;
        setNewUser(newStateUser);
        // console.log(newStateUser);
        // console.log(type);

    }
    let redirect=null;
    if(Redirection===true){
        redirect=<Redirect to='/'></Redirect>
    }
    return(
        <div>
            {redirect}
            <form onSubmit={addUser}>
                <input type="text" value={newUser.username} onChange={(event)=>inputChangeHandler(event,"username")} placeholder="username"></input><br></br>
                <input type="text" value={newUser.password} onChange={(event)=>inputChangeHandler(event,"password")} placeholder="password"></input><br></br>
                <input type="text" value={newUser.firstname} onChange={(event)=>inputChangeHandler(event,"firstname")} placeholder="firstname"></input><br></br>
                <input type="text" value={newUser.lastname} onChange={(event)=>inputChangeHandler(event,"lastname")} placeholder="lastname"></input><br></br>
                <button>Add</button>

            </form>
        </div>
    )


}

export default AddUser;