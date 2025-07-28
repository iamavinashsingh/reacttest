import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const Explore = ({navigation , route}) => {
    const { name } = route.params || {};
    return (
        <View style={{backgroundColor:'yellow', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:32,color:'blue', margin:10}}>Hello ! {name}</Text>
        <Text style={{fontSize:32,color:'blue'}}>Explore</Text>
        <Button title='Home' onPress={()=> navigation.navigate("Home",{name:name})}/>
        <Button title='Profile' onPress={()=> navigation.navigate("Profile",{name:name})}/>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({})