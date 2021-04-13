import React from 'react';
import classes from './Td.module.css';
const Td =(props)=>{
    
    return(
        <td className={classes.Td}>{props.children}</td>
    )

}

export default Td;