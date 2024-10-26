const defaultCart ={
    cart: []
}

function cartReducer(state = defaultCart,action) {
    if (action.type === "ADD_CART") {
        let copied = [...state.cart]
        copied.push(action.payload)

        return{...state, cart: copied}
    }else if(action.type === "REMOVE_CART"){
       let copied = [...state.cart]
       copied = copied.filter(function (value) {
         return value.id != action.payload
       })

       return {...state, cart: copied}
    }else if(action.type === "CLEAR_CARTS"){
        
 
        return {...state, cart: []}
     }else{
        return state
     }
}

export default cartReducer