import {Platform} from 'react-native';


export default {

  login: {
    alignItems : Platform.OS === 'ios' ? 'stretch' : 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
    //flexDirection: 'column'
  },
  inputText: {
    //flex: 5,
    flex: 8,
    //backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'blue',
    borderColor: 'grey',
    height: 40,
    //color: '#424242',
    color: '#000',
    //fontSize: 15,
    fontSize: 25,
    //borderRadius: 14
    borderRadius: 4
  },
  button: {
    flex: 3,
    //backgroundColor: 'yellow',
    //backgroundColor: 'red',
    //alignItems:'center',
    alignItems:'stretch',
    //alignItems:'center',
    justifyContent:'flex-start',
    height: 40,
    borderRadius: 12,
    borderColor: 'magenta',
    //borderColor: 'orange',
    borderWidth: 22,
    //borderWidth: 2
  }

}