import { View, Text, StyleSheet, TextInput, ActivityIndicator, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import { EvilIcons } from '@expo/vector-icons';
import { todoListApi } from '../components/service/api';
import UserDetailScreen from './UserDetailScreen';
import SearchBarScreen from './SearchBarScreen';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.development';





const MainScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const [data, setData] = useState(null)
  const [term, setTerm] = useState('')

  const [loader, setLoader] = useState(false)

  const searchResult = (val) => {
    setTerm(val)
    var reg = /^\d+$/;
    // console.log(reg?.test(val))
    if (val) {
      if (reg?.test(val)) {
        
        const filterWithIdAndUserIdData = data?.filter((item) => {
          // console.log(item?.id)

          return parseInt(item?.id) === parseInt(val) || parseInt(item?.userId) === parseInt(val)


        })
        

        setResult(filterWithIdAndUserIdData)
      } else {
        console.log(val.toLowerCase())
        if(val.toLowerCase() == "true" || val.toLowerCase() == "false"){
          console.log("cond passed")
          var searchValToBool = (val.toLowerCase() == "true") ? true : false
          console.log(searchValToBool)

          const filterWithIdAndUserIdData = data?.filter((item) => {
            // console.log(item?.id)
            return item?.completed === searchValToBool  
          })
          setResult(filterWithIdAndUserIdData)

  

        } else {
          const filterData = data?.filter((item) => {
            // console.log(item?.id)
            return (item?.title?.includes(val.toLowerCase()))
          })
          setResult(filterData)
        }
      }

    } else {
      setResult(data)
    }


  }

  useEffect(() => {
    setLoader(true)
    todoListApi().then((response) => {
      setResult(response?.data)
      setLoader(false)
      setData(response?.data)
      // console.log('response', response?.data)
    })
      .catch((error) => {
        setLoader(false)
        // console.log(error)
      })
  }, [])
  const itemRender = ({ item }) => {
    // console.log(item.completed)
    return (
      <View style={{ borderWidth: 1, marginVertical: 10, borderRadius: 10 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#E0E0E0', borderTopLeftRadius: 9, borderTopEndRadius: 9, padding: 10 }}>
          <Text>Todo</Text>
          <TouchableOpacity style={{ flexGrow: 1, alignItems: 'flex-end' }} onPress={() => navigation.navigate('userDetail', { id: item.id })}>
            <Text>More</Text>
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'flex-end', flex: 1, padding: 10 }}>
          <View style={{ felx: 1, alignSelf: 'flex-start' }}>
            <Text style={{ justifyContent: 'center' }} >completed</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-end' }} >
            <Text >{item?.completed === true ? "true" : "false"}</Text>
          </View>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'flex-end', flex: 1, padding: 10 }}>
          <View style={{ felx: 1, alignSelf: 'flex-start' }}>
            <Text style={{ justifyContent: 'center' }} >Id</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-end' }} >
            <Text >{item.id}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'flex-end', flex: 1, padding: 10 }}>
          <View style={{ felx: 1, alignSelf: 'flex-start' }}>
            <Text style={{ justifyContent: 'center' }} >Title</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-end' }} >
            <Text >{item.title}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'flex-end', flex: 1, padding: 10 }}>
          <View style={{ felx: 1, alignSelf: 'flex-start' }}>
            <Text style={{ justifyContent: 'center' }} >UserId</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-end' }} >
            <Text >{item.userId}</Text>
          </View>
        </View>
      </View>

    )
  }
  return (

    <View style={styles.size}>
      {loader ? <ActivityIndicator size={'small'} color={'red'} />

        : <View>
          <Header />
          <View style={{ padding: 10 }}>
            <SearchBarScreen term={term} onTermChange={newTerm => searchResult(newTerm)} />
            {/* <TextInput placeholder='search todos..'  /> */}
            <FlatList
              style={{}}
              data={result}
              renderItem={itemRender}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>}
    </View>
  )
}
const styles = StyleSheet.create({
  size: {
    flex: 1,

  }
})
export default MainScreen