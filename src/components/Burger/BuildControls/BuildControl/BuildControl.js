import React from 'react';
import ctrlStyle from './BuildControl.module.css';

const buildControl = props => (
    <div className={ctrlStyle.BuildControl}>
        <div className={ctrlStyle.Label}>{props.ingName}</div>
        <button 
            className={ctrlStyle.Less} 
            onClick={props.rmvIng}
            disabled={props.disableInfo}> Less</button>
        <button className={ctrlStyle.More} onClick={props.addIng}>More</button>
    </div>
)

export default buildControl;