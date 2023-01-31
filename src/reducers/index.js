import { combineReducers } from "redux";
import filterReducer from "./Filters";
import ImageSaveReducer from "./saveImage";
export const rootReducer = combineReducers({
    filterReducer,
    ImageSaveReducer
})