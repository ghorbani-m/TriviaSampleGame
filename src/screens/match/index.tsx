import React, {Component} from 'react';
import { Text, View, LayoutChangeEvent, ViewStyle, StyleProp, ActivityIndicator} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import CardStack, { Card as CardSwiper } from 'react-native-card-stack-swiper';
import { IAppState } from '../../store';
import {refreshQuestion,addUserAnswer,setEndTime} from "../../store/match/actions"
import styles from "./styles"
import { IMatchState, IQuestion } from '../../store/match/types';
import {Card,Timer} from "../../components"

interface Props {
  match:IMatchState,
  refreshQuestion:typeof refreshQuestion,
  addUserAnswer:typeof addUserAnswer,
  setEndTime:typeof setEndTime,
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
interface State{
  loading:boolean,
  cardStyle?:StyleProp<ViewStyle>
}
export class Match extends Component<Props,State> {
  state={
    loading:true
  };
  cardContainerOnLayout=(event: LayoutChangeEvent)=>{
    const cardStyle={
      width:event.nativeEvent.layout.width-50,
      height:event.nativeEvent.layout.height-50,
    }
    this.setState({cardStyle});
  }
  onAnswer=async (answer: boolean)=> {
    const {match,navigation}=this.props;
    this.props.addUserAnswer(answer);
    if(match.question && match.userAnswers.length==match.question.length-1){
      await this.props.setEndTime(new Date());
      navigation.navigate("Home");
    }else
      this.swiper.swipeLeft();
  
  };
  async componentDidMount(){
    console.log("this.props",this.props)
    await this.props.refreshQuestion();
    this.setState({loading:false});
  }  
  render() {
    const {cardStyle}=this.state;
    const {match}=this.props;
    console.log("match",match)
    if(match.question==null)
      return(<View style={styles.container}>
        <ActivityIndicator size="large" color="#d500f9" />
        <Text style={{alignSelf:"center"}}>Loading Question</Text>
      </View>)
    return (
      <View style={styles.container}>
        <View style={styles.matchHeader}>
            <Timer startTime={match.startTime} />
            <Text style={styles.counter} >{match.userAnswers.length}/10</Text>
        </View>
        <View style={styles.cardContainer} onLayout={this.cardContainerOnLayout}>
        {cardStyle?<CardStack 
            style={styles.cardStack} 
            verticalSwipe={false} 
            horizontalSwipe={true} 
            disableLeftSwipe 
            disableRightSwipe 
            secondCardZoom={.75}
            ref={ swiper => { this.swiper = swiper }}>
            {
              match.question.map((question, index)=>
                <CardSwiper key={index} style={[styles.card,cardStyle]}>
                  <Card key={`card_${index}`} question={question} onAnswer={this.onAnswer}/>   
                </CardSwiper>
                )
            }
          </CardStack>:null}
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
        refreshQuestion,
        addUserAnswer,
        setEndTime
      },
      dispatch
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Match);

