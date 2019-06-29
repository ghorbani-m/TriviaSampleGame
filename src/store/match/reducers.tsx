import {
    IMatchState, MatchActionTypes, MatchActions
  } from './types'
  
  const initialState: IMatchState = {
    question: null,
    userAnswers:[]
  }
  
  export function matchReducer(
    state = initialState,
    action: MatchActions
  ): IMatchState {
    switch (action.type) {
      case MatchActionTypes.REFRESH_QUESTIOM:
        return {
          question: action.payload,
          userAnswers:[]
        }
      case MatchActionTypes.ADD_ANSWER:
        return {
            ...state,
            userAnswers:[...state.userAnswers,action.payload]
        }
      default:
        return state
    }
  }