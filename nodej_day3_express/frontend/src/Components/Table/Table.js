import React from 'react';
import Tr from './Tr/Tr';
import classes from './Table.module.css';
const Table =(props)=>{
    // let allRows=props.content.map(item=>{
    //     return (
    //         // <Tr key={item.password} row={item}></Tr>
    //         item
    //     );
    // });
    let allRows=[];
    for(let i in props.content){
        allRows.push(<Tr key={props.content[i].password} row={props.content[i]} onDeleteHandler={props.onDeleteHandler}></Tr>)
    }
    // console.log(allRows);
    // console.log(props.content);
    return(
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>Delete</th>


                </tr>
            </thead>
            <tbody>
            {allRows}
            </tbody>
        </table>
    )

}

export default Table;