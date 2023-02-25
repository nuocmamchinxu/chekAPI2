import { combineReducers } from "redux";
import dataReducer from "./reducer";
const rootReducer = combineReducers({
  app: dataReducer,
});
export default rootReducer;
