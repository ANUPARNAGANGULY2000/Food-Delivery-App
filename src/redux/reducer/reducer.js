const initialstate = {
    carts: []
};

export const componentreducer =(state=initialstate,action)=>{
    switch(action.type){
        case "add_to_cart":
            {
                console.log("state is: ",state);
                console.log("state.carts is: ",state.carts);
                console.log("action.payload is: ",action.payload);
               
                return{
                    ...state,
                    carts:[...state.carts,action.payload]
                }
            }

            case "increment": {
                  
               const index =  state.carts.findIndex((iteam)=>iteam.id === action.payload.id);

                state.carts[index].quantity+=1;
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }

            case "decrement":
                {

                    const index =  state.carts.findIndex((iteam)=>iteam.id === action.payload.id);
                    if(state.carts[index].quantity>=1){
                        state.carts[index].quantity-=1;
                    }
                    
                return {
                    ...state,
                   carts:[...state.carts]
                     }
               }
        default: return state ;
    }

}
