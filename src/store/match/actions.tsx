
import { ActionCreator, Dispatch } from 'redux';
import {ThunkAction} from "redux-thunk"
import { MatchActions, IQuestion,MatchActionTypes,IMatchState } from './types'

export const refreshQuestion: ActionCreator<
  ThunkAction<Promise<any>, IMatchState, null, MatchActions>
> = () => {
  return async (dispatch: Dispatch<MatchActions>) => {
    try {
      const question:IQuestion={
        question:"",
      };
      dispatch({
        type: MatchActionTypes.REFRESH_QUESTIOM,
        payload:question
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const addUserAnswer: ActionCreator<
  ThunkAction<Promise<any>, IMatchState, null, MatchActions>
> = (answer:string) => {
  return async (dispatch: Dispatch<MatchActions>) => {
    try {
      dispatch({
        type: MatchActionTypes.ADD_ANSWER,
        payload:answer
      });
    } catch (err) {
      console.error(err);
    }
  };
};