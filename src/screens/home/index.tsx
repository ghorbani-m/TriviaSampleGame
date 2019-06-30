import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { IAppState } from '../../store';
import styles from "./styles"
import { IMatchState } from '../../store/match/types';
import { Button } from '../../components';

interface Props {
  match:IMatchState,
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
export class Home extends Component<Props> {

  calculateSpentTime=(match:IMatchState)=>{
    const { startTime ,endTime} = match;
    if(startTime && endTime){
        const spentTime = Math.floor((endTime.getTime() - startTime.getTime()) / 1000) + 1;
        return `${(Math.floor(spentTime / 60)).toString().padStart(2, "0")}:${(spentTime % 60).toString().padStart(2, "0")}`
    }else
      return ""
       
  }
  render() {
    const {navigation,match}=this.props;
    return (
      <View style={styles.container}>
        {!match.question || match.question.length==0?
        <View style={styles.section}>
          <Text style={styles.welcome}>Welcome to Trivia Sample Game!</Text>
          <Text style={styles.instructions}>To get started, touch Start button</Text>
        </View>:
        <View style={styles.section}>
          <Text style={styles.instructions}>Your Score</Text>
          <Text style={styles.welcome}>{match.userAnswers.filter(item=>item).length}/{match.question.length}</Text>
          <Text style={styles.instructions}>Your Time</Text>
          <Text style={styles.welcome}>{this.calculateSpentTime(match)}</Text>
        </View>}
        <View style={styles.section}>
          <Button title={match.question?"Play again":"Start Quiz"} 
            style={{backgroundColor:"#4a148c",maxHeight:50,paddingHorizontal:30}}
            textStyle={{color:"white"}}
            onPress={()=>{
              navigation.navigate("Match");
          }}></Button>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (store: IAppState) => {
    return {
      match:store.match
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
      },
      dispatch
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);

