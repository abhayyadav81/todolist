import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{height:50,alignItems:'center',justifyContent:'center',marginTop:20}}>
      <Text style={{fontSize:20 ,}}>Todo List</Text>
    </View>
  )
}

export default Header