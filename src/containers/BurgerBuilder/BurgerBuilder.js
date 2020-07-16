import React, { Component } from 'react'
import Auxillary from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 75,
    meat: 99,
    bacon: 80
}
class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0              
            },
            totalPrice: 100,
            purchasable: true
        }
        
    }

    updatePurchaseState = (updatedPrice) => {
        console.log('totalPrice: ',this.state.totalPrice)
        if(updatedPrice > 100) {
            this.setState ({
                purchasable: false
            })
        }
        console.log('Purchase Val: ',this.state.purchasable)
    }
   
    //Add Ingredients on Burger
    addIngredientsHandler = (type) => {
        console.log('addIngredientsHandler: ')
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIng = {
            ...this.state.ingredients
        }
        updatedIng[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAdd;
        this.setState({//Set it back to State
            totalPrice: updatedPrice,
            ingredients: updatedIng
        })
        console.log('addIngredientsHandler price: ',updatedPrice)
        this.updatePurchaseState(updatedPrice)
    }

    //Remove Ingredients on Burger
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount === 0) {
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIng = {
            ...this.state.ingredients
        }
        updatedIng[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceAdd;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIng
        })
        this.updatePurchaseState(updatedPrice)
    }

    render() {
        //console.log('Purchase Val Out: ',this.state.purchasable)
        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            //console.log('Disable Value bf: ',disableInfo[key]);
            disableInfo[key] = disableInfo[key] <=0
           // console.log('Disable Value bf: ',disableInfo[key]);
            
        }
        console.log('Disable Valuezxczxc: ',disableInfo);
        return(
            <Auxillary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                 addIng={this.addIngredientsHandler}
                 rmvIng={this.removeIngredientsHandler}
                 disableInfo={disableInfo}
                 totalPrice={this.state.totalPrice}
                 purchasable={this.state.purchasable}/>
            </Auxillary>
        )
    }
}

export default BurgerBuilder;