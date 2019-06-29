export enum MatchActionTypes{
  REFRESH_QUESTIOM = 'MATCH_REFRESH_QUESTIOM',
  ADD_ANSWER = 'MATCH_ADD_ANSWER'
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
    question: IQuestion | null,
    userAnswers:string[]
}

interface IRefreshQuestionAction {
  type: typeof MatchActionTypes.REFRESH_QUESTIOM
  payload: IQuestion
}
interface IAddUserAnswerAction {
  type: typeof MatchActionTypes.ADD_ANSWER,
  payload:string
}

export type MatchActions = IRefreshQuestionAction | IAddUserAnswerAction