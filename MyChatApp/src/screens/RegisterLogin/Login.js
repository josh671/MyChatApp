// https://www.youtube.com/watch?v=zEL-L2F0o7Q

import React, {useState, createContext} from 'react';
import { SafeAreaView,  Button,  StyleSheet,  TextInput, Text, View} from 'react-native';
import {RegisterLoginStack} from '../../Navigation/RegisterLoginStack';




 
 const Login = ({navigation}) =>   {
  
  const [userName, setName] = useState('');
  const [userPassword, setUserPassword] = useState(''); 
 
  const navitating = ({navigation})=>{
    navigation.navigate("RegisterScreen");
  }
  const registerUser = (navigation) =>{
    navigation.navigate("RegisterScreen"); 
  }
  return (
    <SafeAreaView style={styles.Background}>
        <View>
            <Text style={styles.RegistrationHeadlines}>User Name</Text>
            <TextInput value={userName} onChangeText={(userName)=>{setName(userName)}} placeholder='User Name' style={styles.TextInputs} />
            <Text style={styles.RegistrationHeadlines}>Password</Text>
            <TextInput value={userPassword} onChangeText={(userPassword)=>{setUserPassword(userPassword)}} placeholder='Password' style={styles.TextInputs} />
            <Button onPress= {""} title="Register" /> 
            <View>
            <Text style={styles.RegisterText} >Would you like to <Text onPress={()=> navigation.navigate("RegisterScreen")} style={{color: 'red'}} >Register?</Text></Text>
            <Button onPress={()=>navigation.navigate("HomeScreen")} title="HOME"/>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Background:{
    flex:1,
    padding: 20,
    justifyContent:'center',
    alignContent:'center',
  },
  TextInputs:{
    fontSize: 24,
    fontWeight:'bold', 
    padding: 10, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom:10,
    borderRadius:10,
    height:50
  }, 

  RegistrationHeadlines:{
    fontSize:24, 
    padding:5,
  }, 

  RegisterText:{
    textAlign:'center', 
    marginTop: 20, 
    fontSize: 20
  }
});

export default Login;
