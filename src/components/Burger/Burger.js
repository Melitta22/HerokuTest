import React from 'react';
import burgStyle from './Burger.module.css'
import BurgerIngredeint from './BurgerIngredient/BurgerIngredient'


const burger = props => {
    let receivedIng = Object.keys(props.ingredients)
                        .map(igKey => {
                                return[...Array(props.ingredients[igKey])].map((_,i) => {
                                    return <BurgerIngredeint key={igKey+i} type={igKey} />
                                });
                            
                        })
                        .reduce((arr, el) => {
                            return arr.concat(el)
                        },[]);
    if(receivedIng.length === 0) {
        receivedIng = <p>Please choose atleast 1 Ingredeint for a Yummy Burger!</p>

    }
    console.log(receivedIng);
    return(
        <div className={burgStyle.Burger}>
            <BurgerIngredeint type='bread-top'/>
            {receivedIng}
            <BurgerIngredeint type='bread-bottom'/>
        </div>
    )
}

export default burger;