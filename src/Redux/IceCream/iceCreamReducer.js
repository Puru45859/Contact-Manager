import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
  numberoficeCream: 10,
};
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberoficeCream: state.numberoficeCream - 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
