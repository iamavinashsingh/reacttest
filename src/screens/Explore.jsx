import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Explore = () => {
    return (
        <View style={{backgroundColor:'yellow', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:32,color:'blue'}}>Explore</Text>
        <Button title='Home'/>
        <Button title='Profile'/>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({})