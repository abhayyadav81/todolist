import { View, Text ,TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const SearchBarScreen = ({term,onTermChange}) => {
  return (
    <View style={{flexDirection:'row',borderWidth: 1,padding: 5, borderRadius: 40 }}>
      <AntDesign name="search1" size={23} color="black" style={{marginTop:4}} /> 
      <TextInput placeholder='search todoss.' style={{  fontSize: 20, }} value={term} onChangeText={newTerm=>onTermChange(newTerm)} autoCapitalize='none'/>
    </View>
  )
}

export default SearchBarScreen