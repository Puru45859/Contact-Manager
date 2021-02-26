import { combineReducers } from "redux";
import cakeReducer from "./Cakes/cakeReducer";
import icecreamReducer from "./IceCream/iceCreamReducer";
import userReducer from "./Users/usersReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
  user: userReducer,
});

export default rootReducer;
