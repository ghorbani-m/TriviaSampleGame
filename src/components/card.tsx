import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { IQuestion } from '../store/match/types';
import staticHelper from "../helpers/staticHelper"
import {Button} from "./index"

interface Props {
  question:IQuestion,
  onAnswer(answer:boolean):void
}
interface State{
  answer?:string,
  buttonIndex:number,
  answers:string[]
}
export default class Card extends Component<Props,State> {
    state={
        answer:"",
        buttonIndex:-1,
        answers:staticHelper.shuffle([...this.props.question.incorrect_answers,this.props.question.correct_answer])
    }
    onButtonClick(answer:string,buttonIndex:number){
        const{question}=this.props;
        const result=answer==question.correct_answer;
        this.setState({answer:question.correct_answer,buttonIndex},()=>{
            setTimeout(() => {
                this.props.onAnswer(result);
            }, 300);
        });
    }
    render() {
        const {buttonIndex,answer,answers}=this.state;
        const {question}=this.props;
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.questionText}>{question.question}</Text>
            </View>
            <View style={{flex:1,paddingBottom:5}}>
                {answers.map((answerText,index)=>
                    <View style={{flex:1, padding:5,paddingHorizontal:15}}>
                        <Button key={index} 
                            title={answerText} 
                            style={[styles.button,index===buttonIndex?answerText===answer?styles.success:styles.wrong:{}]}
                            onPress={()=>!answer?this.onButtonClick(answerText,index):null} />
                    </View>
                )}
            </View>
        </View>
        );
    }
}


const styles=StyleSheet.create({
    container: {flex:1},
    header:{flex:1,justifyContent:"center",alignItems:"center"},
    questionText: {color:"white",fontSize:18,textAlign:"center",padding:15},
    button:{borderColor:"#ea80fc",borderWidth:1},
    success:{backgroundColor:"#43a047"},
    wrong:{backgroundColor:"#e64a19"}
  });