import React from 'react';
import {Button,View,SafeAreaView, StyleSheet, TextInput,Text,Alert} from 'react-native';

function CreateContact() {
  const [name, setName] =  React.useState('');
  const [no, setNo] =  React.useState('');
  const [msg, setMsg] = React.useState('');
  const saveContact = () => {

  if(name == ""){
    setMsg('Enter contact name')
  }
  if(no == ""){
    setMsg('Enter contact no')
  }
    setMsg('Contact saved successfully\n' + name +'\n'+ no);
    setName('');
    setNo('');
    setTimeout(() => {
      setMsg('');
    }, 1000);
  }
    return (
      <View>
        <SafeAreaView>
          <Text style={styles.txt}>Contact name</Text>
          <TextInput
            key="name"
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
          <Text style={styles.txt}>Mobile no</Text>
          <TextInput
             key="no"
            style={styles.input}
            onChangeText={setNo}
            value={no}
            keyboardType="numeric"
          />         

          <View style={[{ width: "50%", margin: 10,marginLeft:"25%"}]}>
            <Button
              title="Add"
              color="#888"
              onPress={saveContact}
              style={styles.button}
            />
          </View> 
          <Text style={styles.successMsg}>{msg}</Text>
        </SafeAreaView>
      </View>
    );
  }
export default CreateContact  
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40
  },
  successMsg: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'grey'
  },
  txt: {
    fontWeight: 'bold',
    alignSelf: 'left',
    color: 'grey',
    marginLeft: 12
  },
});