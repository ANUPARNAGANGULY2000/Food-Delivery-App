export const ADD = (item) => {
  return {
    type: "add_to_cart",
    payload: item,
  };
};
export const minus = (item) => {

  return{

    type: "decrement" ,
    payload: item ,
  }
}

export const plus = (item) => {

  return{

    type: "increment" ,
    payload: item ,
  }
}