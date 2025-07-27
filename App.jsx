import { StyleSheet, Text, SafeAreaView , View ,ScrollView , Image , FlatList} from 'react-native'
import React, { use } from 'react'


const dummy = [
  {id: 1, title: 'Ben10', name: 'Classic', image: 'https://wallpaperaccess.com/full/983769.jpg'},
  {id: 2, title: 'Ben10', name: 'Alien Force', image: 'https://wallpaperaccess.com/full/2403936.jpg'},
  {id: 3, title: 'Ben10', name: 'Omniverse', image: 'https://wallpaperaccess.com/full/5230927.jpg'},
  {id: 4, title: 'Ben10', name: 'Reboot', image: 'https://wallpaperaccess.com/full/5964286.png'},
  {id: 5, title: 'Ben10', name: 'Ultimate Alien', image: 'https://wallpaperaccess.com/full/4407142.jpg'},
]

const App = () => {

  return (
  <SafeAreaView style={style.mainArea}>
    <FlatList
      data={dummy}
      renderItem={({item})=>(
        <View style={style.card}>
          <Image source={{uri: item.image}} style={style.image}/>
          <View style={style.text}>
            <Text style={style.title}>{item.title}</Text>
            <Text style={style.name}>{item.name}</Text>
          </View>          
        </View>
      )}
      keyExtractor={(item)=>item.id}
      itemSeparatorComponent={()=><View style={{height: 20}} />}
    />

            
    </SafeAreaView>
  )
}

export default App  

const style = StyleSheet.create({
  mainArea: {
    width: '100%',
    height: '100%',
    padding: 10,
    paddingTop: 50,
  },
  card:{
    flexDirection: 'row',
    width: 250,
    height: 80,
    margin:10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#383839ff',
    borderRadius: 10,
  },
  image:{
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  text:{
    alignItems: 'space-between',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },  
  name: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
})  