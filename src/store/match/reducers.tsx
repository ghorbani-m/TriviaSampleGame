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
          userAnswers:[],
          startTime:new Date(),
        }
      case MatchActionTypes.ADD_ANSWER:
        return {
            ...state,
            userAnswers:[...state.userAnswers,action.payload]
        }
      case MatchActionTypes.SET_STARTTIME:
        return {
            ...state,
            startTime:action.payload
        }
      case MatchActionTypes.SET_ENDTIME:
        return {
            ...state,
            endTime:action.payload
        }
      default:
        return state
    }
  }