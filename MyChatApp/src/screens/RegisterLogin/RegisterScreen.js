

import React, {useState, createContext} from 'react';
// https://www.youtube.com/watch?v=zEL-L2F0o7Q
import { SafeAreaView,  Button,  StyleSheet,  TextInput, Text, ScrollView, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const AuthContextSettings = createContext();
 const RegisterScreen = () =>   {
  
  const [userName, setName] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState(''); 
  const [reEnterPW, setReEnterPW] = useState(''); 
    const createUser = () =>{
        const items = [userName, firstName, lastName, email, mobile, password, reEnterPW]; 
        var count = 0; 
        const countEmpty = (item) =>{
            if(item == '') count++; 
        }
        items.forEach(element=>{countEmpty(element)})
        if(count == 0){
            firestore()
            .collection('Users')
            .doc()
            .set({
              email: email, 
              mobile: mobile,
              firstName: firstName,
              lastName: lastName, 
              username: userName, 
              password: password,
            })
            .then(()=>{
            console.log('data sumitted'); 
            })
            .catch((error)=>{
                console.log(error);
            })
        } else {
            Alert.alert('Form Not Complete',
            'You must fill out all parts of the form'); 
        }
    }
  return (
    <SafeAreaView style={styles.Background}>
        <ScrollView>
            <Text style={styles.RegistrationHeadlines}>User Name</Text>
            <TextInput value={userName} onChangeText={(userName)=>{setName(userName)}} placeholder='User Name' style={styles.TextInputs} />
            <Text style={styles.RegistrationHeadlines}>First Name</Text>
            <TextInput value={firstName} onChangeText={(firstName)=>{setFirstName(firstName)}} placeholder='First Name' style={styles.TextInputs} />
            <Text  style={styles.RegistrationHeadlines}>Last Name</Text>
            <TextInput value={lastName} onChangeText={(lastName)=>{setLastName(lastName)}} placeholder='Last Name' style={styles.TextInputs} />
            <Text  style={styles.RegistrationHeadlines}>Email</Text>
            <TextInput value={email} onChangeText={(email)=>{setEmail(email)}} placeholder='email' style={styles.TextInputs} />
            <Text  style={styles.RegistrationHeadlines}>Phone Number</Text>
            <TextInput value={mobile} onChangeText={(mobile)=>{setMobile(mobile)}} placeholder='Phone Number' style={styles.TextInputs} />
            <Text  style={styles.RegistrationHeadlines}>Password</Text>
            <TextInput value={password} onChangeText={(password)=>{setPassword(password)}} placeholder='Password' style={styles.TextInputs} />
            <Text  style={styles.RegistrationHeadlines}>Re-enter Password</Text>
            <TextInput value={reEnterPW} onChangeText={(reEnterPW)=>{setReEnterPW(reEnterPW)}} placeholder='Password' style={styles.TextInputs} />
            <Button onPress={ createUser } title="button" /> 
        </ScrollView>
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
    fontSize: 12,
    fontWeight:'bold', 
    padding: 10, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom:10,
    borderRadius:10,
    height:35
  }, 
  RegistrationHeadlines:{
    fontSize:22, 
    padding:5,
    

  }
});

export default RegisterScreen;
