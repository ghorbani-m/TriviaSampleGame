import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    matchHeader:{
      flex:1,
      justifyContent: 'center',
      backgroundColor:"#7b1fa2",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
    },
    cardContainer:{
      flex:4
    },
    cardStack: {
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:"#fafafa",
    },
    card:{
      backgroundColor:"#8e24aa",
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,

      elevation: 5,
    },
    counter:{
      flex:1,
      fontSize:20,
      textAlign:"center",
      padding:10,
      color:"white"}
   
  });