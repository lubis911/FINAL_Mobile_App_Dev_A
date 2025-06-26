import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

const TextInput = (props: TextInputProps) => {
  return <RNTextInput style={styles.input} {...props} />;
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    backgroundColor: '#fff',
  },
});
