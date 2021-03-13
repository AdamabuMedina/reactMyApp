import { Reducer } from "redux"
import { RootState } from "./actionCreator"
import { UPDATE_COMMENT, SET_TOKEN } from "./constant"

const initialState: RootState = {
   commentText: "Привет, Skillbox",
   token: "",
}

export const rootReducer: Reducer<RootState> = (state=initialState, action) => {
    switch (action.type) {
       case UPDATE_COMMENT:
          return {
             ...state,
             commentText: action.text
          }
       case SET_TOKEN:
          return {
             ...state,
             token: action.token
          }
       default:
          return state
    }
 }