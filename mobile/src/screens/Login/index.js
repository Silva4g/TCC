import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import bolaLogin from "../../../assets/bolaLogin.png";

import styles from './styles';

export default function Login() {

  // function goToForgot() {
  //   return props.navigate.navigation('ForgotPassword');
  // }
  const { navigate } = useNavigation();

  return (

    <>
      <View style={{ flex: 3, backgroundColor: '#3498db' }}>
        <View style={styles.div}>
          <Text style={styles.textoLogin}>
            Login
          </Text>

          <View style={styles.inputContainer}>
            <Icon style={styles.iconUser} name="user" />
            <TextInput style={styles.input}
              placeholder="Email"
              placeholderTextColor='white'
              backgroundColor='#72d2fb'
            //underlineColorAndroid='green' 
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon style={styles.iconLock} name="lock" />
            <Icon style={styles.iconEye} name="eye" />
            <TextInput style={styles.input}
              placeholder="Senha"
              placeholderTextColor='white'
              backgroundColor='#72d2fb'
            />
          </View>
        </View>
        <TouchableOpacity style={styles.botaoEntrar}
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <Text style={styles.txtBtEntrar}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Button title="Register" onPress={() => navigate('Register')} />
        <Button title="ForgotPass" onPress={() => navigate('ForgotPassword')} />
        <Button title="HomeUser" onPress={() => navigate('HomeUser')} />
      </View>
    </>
  );
}