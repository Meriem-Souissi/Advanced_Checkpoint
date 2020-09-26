import React from 'react';
import '../App.css';


const ProductTable = (props)=>{
return(
<table style={{
    border:'solid black' ,
    borderCollapse:'collapse',
    width: '50%',
    margin: '200px 400px'}}>
    <tr style={{height: 50 , fontSize:'20px' ,color:'lightskyblue'}}>
        <th style={{border:'solid black', height: 50}}>Name</th>
        <th style={{border:'solid black', height: 50}}>Price</th>
        <th style={{border:'solid black' ,height: 50}}>Category</th>
    </tr>

    {props.products.map(el => 
    <tr style={{fontStyle: 'italic', fontWeight:'bold'}}>
       <td style={{border:'solid black'}}>{el.name}</td>
       <td style={{border:'solid black'}}>{el.price}</td>
       <td style={{border:'solid black'}}>{el.category}</td>
    </tr>
    )}
</table>
);
}

export default ProductTable;
