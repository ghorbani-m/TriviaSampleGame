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
import {refreshQuestion} from "../../store/match/actions"
import styles from "./styles"
import { IMatchState } from '../../store/match/types';
import { Button } from '../../components';

interface Props {
  match:IMatchState,
  refreshQuestion:typeof refreshQuestion,
  navigation: NavigationScreenProp<NavigationState, NavigationParams>

}
export class Home extends Component<Props> {
  async componentDidMount(){
    console.log("this.props",this.props)
    await this.props.refreshQuestion();
    this.setState({});
  }  
  render() {
    const {navigation}=this.props;

    return (
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:"center"}}>
          <Text style={styles.welcome}>Welcome to sample Trivia Game!</Text>
          <Text style={styles.instructions}>To get started, touch Start button</Text>
        </View>
        <View style={{flex:1,justifyContent:"center"}}>
          <Button title="Start Game" 
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
        refreshQuestion
      },
      dispatch
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);

