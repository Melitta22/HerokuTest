import React from 'react';
import ctrlsStyle from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {ingName: 'Salad', type:'salad'},
    {ingName: 'Cheese', type:'cheese'},
    {ingName: 'Bacon', type:'bacon'}
];

const buildControls = (props) => (
    //return(
    <div className={ctrlsStyle.BuildControls}>
        <p>Total Price: Rs. <strong>{props.totalPrice}</strong></p>
        {controls.map(eachCtrl => (
            <BuildControl 
                key={eachCtrl.ingName} 
                ingName={eachCtrl.ingName} 
                addIng = {() => {props.addIng(eachCtrl.type)}}
                rmvIng = {() => {props.rmvIng(eachCtrl.type)}}
                disableInfo={props.disableInfo[eachCtrl.type]}
                />
           
        ))}
        <button className={ctrlsStyle.OrderButton}
            disabled={props.purchasable}>ORDER NOW</button>
    </div>
    //);
)

export default buildControls;