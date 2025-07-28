import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={{backgroundColor:'purple', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:32,color:'green'}}>Profile</Text>
        <Button title='Explore'/>
        <Button title='Home'/>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})