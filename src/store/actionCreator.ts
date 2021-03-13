import { ActionCreator, AnyAction } from "redux";
import { UPDATE_COMMENT, SET_TOKEN } from "./constant";

export type RootState = {
   commentText: string
   token: string
}

export const updateComment: ActionCreator<AnyAction> = (text) => ({
   type: UPDATE_COMMENT,
   text,
})

export const setToken: ActionCreator<AnyAction> = (token) => ({
   type: SET_TOKEN,
   token,
})