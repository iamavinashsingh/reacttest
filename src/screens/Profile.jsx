import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const Profile = ({navigation , route}) => {
    const {name} = route.params || {};
    return (
        <View style={{backgroundColor:'purple', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:32,color:'green', margin:10}}>Hello!! {name}</Text>
        <Text style={{fontSize:32,color:'green'}}>Profile</Text>
        <Button title='Explore' onPress={()=> navigation.navigate("Explore",{name:name})}/>
        <Button title='Home' onPress={()=> navigation.navigate("Home",{name:name})}/>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})