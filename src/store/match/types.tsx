export enum MatchActionTypes{
  REFRESH_QUESTIOM = 'MATCH_REFRESH_QUESTIOM',
  ADD_ANSWER = 'MATCH_ADD_ANSWER',
  SET_STARTTIME = 'MATCH_SET_STARTTIME',
  SET_ENDTIME = 'MATCH_SET_ENDTIME'
}

//Trivia question interface
export interface IQuestion {
    category: string
    type: string
    difficulty: string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]
}
//Trivia current match state interface
export interface IMatchState {
    question: IQuestion[] | null,
    userAnswers:boolean[],
    startTime?:Date,
    endTime?:Date

}

interface IRefreshQuestionAction {
  type: typeof MatchActionTypes.REFRESH_QUESTIOM
  payload: IQuestion[] | null
}
interface IAddUserAnswerAction {
  type: typeof MatchActionTypes.ADD_ANSWER,
  payload:boolean
}
interface ISetStartTimeAction {
  type: typeof MatchActionTypes.SET_STARTTIME,
  payload:Date
}
interface ISetEndTimeAction {
  type: typeof MatchActionTypes.SET_ENDTIME,
  payload:Date
}

export type MatchActions = IRefreshQuestionAction | IAddUserAnswerAction | ISetStartTimeAction | ISetEndTimeAction