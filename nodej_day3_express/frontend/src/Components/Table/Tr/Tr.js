import React from 'react';
import Td from '../Td/Td';
import classes from './Tr.module.css';
const Tr =(props)=>{
    // console.log(props);
    return(
        <tr className={classes.Tr}>
           <Td >{props.row.username}</Td>
           <Td >{props.row.password}</Td>
           <Td >{props.row.firstname}</Td>
           <Td >{props.row.lastname}</Td>
           <Td><button onClick={()=>props.onDeleteHandler(props.row.username)}>Delete</button></Td>

        </tr>
    )

}

export default Tr;