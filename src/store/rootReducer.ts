import { ActionCreator, Reducer } from "redux"
import { UPDATE_COMMENT, SET_TOKEN, ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR } from "./constant"
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions"
import { meReducer, MeState } from "./me/reducer"

const initialState: RootState = {
   commentText: "Привет, Skillbox",
   token: "",
   me: {
      loading: false,
      error: "",
      data: {}
   }
}

export type RootState = {
   commentText: string
   token: string
   me: MeState
}

export type UpdateCommentAction = {
   type: typeof UPDATE_COMMENT,
   text: string
}

export type SetTokenAction = {
   type: typeof SET_TOKEN,
   token: string
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
   type: UPDATE_COMMENT,
   text,
})

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
   type: SET_TOKEN,
   token,
})

type MyAction = UpdateCommentAction
| SetTokenAction
| MeRequestAction
| MeRequestSuccessAction
| MeRequestErrorAction

export const rootReducer: Reducer<RootState, MyAction> = (state=initialState, action) => {
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
      case ME_REQUEST:
      case ME_REQUEST_SUCCESS:
      case ME_REQUEST_ERROR:
         return {
            ...state,
            me: meReducer(state.me, action)
         }
      default:
         return state
    }
 }