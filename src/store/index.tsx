import {combineReducers,createStore,applyMiddleware } from "redux"
import thunk from 'redux-thunk'

import { matchReducer } from "./match/reducers";
import { IMatchState } from "./match/types";

export interface IAppState {
  match: IMatchState
}

const rootReducer = combineReducers<IAppState>({
  match: matchReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
