import { StyleSheet, Text, View , Button, TextInput } from 'react-native'
import React , {useState} from 'react'

const Home = ({navigation}) => {
  const [name, setName] = useState('');
    return (
        <View style={{backgroundColor:'pink', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:32,color:'red'}}>Home</Text>
        <TextInput 
        placeholder='Enter your name'
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        />
        <Button title='Explore' onPress={()=>navigation.navigate("Explore",{name:name})}/>
        <Button title='Profile' onPress={()=>navigation.navigate("Profile",{name:name})}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
  input:{
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
    borderRadius: 5
  }
})
