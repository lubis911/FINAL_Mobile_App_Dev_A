import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car wash</Text>

      <TextInput placeholder="Enter Email" />
      <TextInput placeholder="Password" secureTextEntry />

      <Button label="Login" onPress={() => {}} />

      <TouchableOpacity>
        <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or quick access with</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../../assets/google.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9B233',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: 'cursive',
    marginBottom: 30,
    color: '#000',
  },
  link: {
    color: '#000',
    marginTop: 10,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#999',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#555',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#000',
  },
});
