export const initialState = {
    basket: []
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount , 0)


export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM"
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id));
            let newBasket = [...state.basket];
            newBasket.splice(index, 1);
            return {
                ...state,
                basket: newBasket
            };    
        default: return state;
    }
}

export default reducer;