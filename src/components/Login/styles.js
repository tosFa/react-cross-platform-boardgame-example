import {Platform} from 'react-native';


export default {

  login: {
    alignItems : Platform.OS === 'ios' ? 'stretch' : 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  inputText: {
    flex: 5,
    //backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'blue',
    height: 40,
    //color: '#424242',
    //fontSize: 15,
    //borderRadius: 4
  },
  button: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems:'center',
    justifyContent:'center',
    height: 40,
    marginLeft: 2,
    //borderRadius: 12,
    //borderColor: 'orange',
    //borderWidth: 2
  }

}