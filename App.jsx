import { StyleSheet, Text, SafeAreaView , View,Button ,TextInput} from 'react-native'
import React, { use } from 'react'


const App = () => {

  return (
    <SafeAreaView style={style.container}>
      <View style={style.formContainer}>
        <Text style={style.text}>Namaskar Mitro</Text>
        <TextInput
          placeholder='Enter Your Name'
          style={style.textInput}
        />
        <TextInput
          placeholder='Enter Your Email'
          style={style.textInput}
        />
        <TextInput
          placeholder='Enter Your Password'
          style={style.textInput}
        />
        <Button title='Sumbit' ></Button>
      </View>
      
    </SafeAreaView>
  )
}

export default App  

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer:{
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  }
  ,
  text:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#fff',
    marginBottom: 15,
    backgroundColor: '#444',
    fontSize: 16,
    fontWeight: '500',
    placeholderTextColor: '#aaa',
  },
})  