import axios from "axios"
import { IQuestion } from "../store/match/types";
import {config} from "../../assetes/config"
export class QuestionService{
    static async getRandomQuestion(amount:number=10){
        const response=await axios({
            baseURL:config.API_URL,
            url:`/api.php?amount=${amount}`,
            method:"GET"
        });
        if(response.status==200){
            const questions:IQuestion[]=response.data.results;
            console.log("questions:",questions)
            return questions;
        }
        return null;

    }
} 