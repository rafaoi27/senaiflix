import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { ScaleFromCenterAndroid } from "react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      "rgba(138,138,138,1)",
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logo: {
    width: '65%',
    height: '35%',
    resizeMode: 'stretch',
    marginBottom: '2%'
  },

    player: {
        height: 400,
        width: '110%',
        
        
    },
    body: {
        flex: 1,
        width: 50,
        height: '70%',
        backgroundColor: '#000',
        marginTop: 150,
        marginLeft: -500,
           
    },
      
    
});