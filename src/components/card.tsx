import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { IQuestion } from '../store/match/types';
import staticHelper from "../helpers/staticHelper"
import {Button} from "./index"

interface Props {
  question:IQuestion,
  onAnswer(answer:string):void
}
interface State{
  loading:boolean
}
export default class Card extends Component<Props,State> {
    onButtonClick(answer:string){
        this.props.onAnswer(answer);

    }
    render() {
        const {question}=this.props;
        const answers=staticHelper.shuffle([...question.incorrect_answers,question.correct_answer]);
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.questionText}>{question.question}</Text>
            </View>
            <View style={{flex:1,paddingBottom:5}}>
                {answers.map((answer,index)=>
                    <View style={{flex:1, padding:5,paddingHorizontal:15}}>
                        <Button key={index} 
                            title={answer} 
                            style={styles.button}
                            onPress={()=>this.onButtonClick(answer)} />
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
    button:{borderColor:"#ea80fc",borderWidth:1}
  });