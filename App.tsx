import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import axios from 'axios';
const base = 'http://192.168.18.114:4000'

const NameInput = ({ updateText }: { updateText: any }) => {
  return <View style={styles.inputWrapper}>
    <Text>Name: </Text>
    <TextInput onTextInput={updateText} placeholder='Enter Name' />
  </View>
}

const PasswordInput = ({ updateText }: { updateText: any }) => {
  return <View style={styles.inputWrapper}>
    <Text>Password: </Text>
    <TextInput
      onTextInput={updateText}
      secureTextEntry={true}
      placeholder='Password' />
  </View>
}
const LoginSectionHeader = ()=>{
  return <View style={{alignSelf: 'center',marginVertical:'30%'}}>
    <Text style={{fontSize:50,}}>
      Login
    </Text>
  </View>
}
const attemptLogin = async ()=>{
  const id = 'nitin4real'
  const password = 'passowrd123'
  try{
    const res = await axios.post(`${base}/login`, { id, password })
    console.log(res.data)
  } catch(er){
    console.log(er)
  }
}
const LoginButton = ()=>{
  return <TouchableOpacity style={styles.loginButtonWrapper}>
    <Text style={styles.loginButtonText} onPress={attemptLogin}>
      Login
    </Text>
  </TouchableOpacity>
}
const LoginScreen = () => {
  const [name, updateName] = useState()
  const [password, updatePassword] = useState()

  return <View>
    <LoginSectionHeader/>
    <NameInput updateText={updateName} />
    <PasswordInput updateText={updatePassword} />
    <LoginButton/>
  </View>
}
function App() {
  const [isLoading, setIsLoading] = useState(false)
  return <LoginScreen />
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#DDD'
  },
  loginButtonWrapper: {
    alignSelf: 'center',
    borderWidth:1,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#708090'
  },
  loginButtonText: {
    fontSize: 30,
    color: 'white'
  }
})
export default App;
