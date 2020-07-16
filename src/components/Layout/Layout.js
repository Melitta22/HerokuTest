import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import layouts from './Layout.module.css';

const layout = (props) => {
    return(
    <Auxillary>
        <div> Toolbar, SideBar, Backdrop
            <main className={layouts.Content}>
                {props.children}
            </main>
        </div>
    </Auxillary>
    )
}

export default layout;