import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Table from '../../Components/Table/Table'
import classes from './Home.module.css';
const Home=(props)=>{
    const [users,setUser]=useState();
    useEffect(()=>{
        axios.get('http://127.0.0.1:4000/users')
        .then((res)=>{
            console.log(res.data);
            console.log(res.data[0].usermame)
            // setUser();
            let arr=[];
            for(let i in res.data){
                arr.push(res.data[i]);
            }
            setUser(arr);
            // console.log(users)
        })

    },[])

    const onDeleteHandler=(username)=>{
        let arr=users.filter((item)=>item.username!=username);
        axios.get(`http://127.0.0.1:4000/${username}`)
        .then((res)=>{
            console.log(res);
        })
        setUser(arr);
    }

    

    return(
        <div className={classes.Home}>
            <Table content={users} onDeleteHandler={onDeleteHandler}></Table>
            
        </div>
    )


}

export default Home;