
import { ActionCreator, Dispatch } from 'redux';
import {ThunkAction} from "redux-thunk"
import { MatchActions, IQuestion,MatchActionTypes,IMatchState } from './types'
import { QuestionService } from '../../services/question-service';

export const refreshQuestion: ActionCreator<
  ThunkAction<Promise<any>, IMatchState, null, MatchActions>
  > = () => {
    return async (dispatch: Dispatch<MatchActions>) => {
      try {
        const questions=await QuestionService.getRandomQuestion();
        dispatch({
          type: MatchActionTypes.REFRESH_QUESTIOM,
          payload:questions
        });
      } catch (err) {
        console.error(err);
      }
    };
};

export const addUserAnswer: ActionCreator<
  ThunkAction<Promise<any>, IMatchState, null, MatchActions>
  > = (answer:boolean) => {
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
export const setStartTime: ActionCreator<
  ThunkAction<Promise<any>, IMatchState, null, MatchActions>
  > = (startTime:Date) => {
    return async (dispatch: Dispatch<MatchActions>) => {
      try {
        dispatch({
          type: MatchActionTypes.SET_STARTTIME,
          payload:startTime
        });
      } catch (err) {
        console.error(err);
      }
    };  
};
export const setEndTime: ActionCreator<
  ThunkAction<Promise<any>, IMatchState, null, MatchActions>
  > = (endTime:Date) => {
    return async (dispatch: Dispatch<MatchActions>) => {
      try {
        dispatch({
          type: MatchActionTypes.SET_STARTTIME,
          payload:endTime
        });
      } catch (err) {
        console.error(err);
      }
    };  
};