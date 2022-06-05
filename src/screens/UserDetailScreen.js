import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { userDetail } from '../components/service/api';



const UserDetailScreen = ({ route }) => {
    const [result, setResult] = useState({})
    const id = route.params.id;
    //    console.log("id",id)

    useEffect(() => {
        userDetail(id).then((response) => {
            setResult(response.data)
            console.log(response.data)
        }).catch(() => {
            setResult(null)
        })
    }, [])
    return (
        <View style={{ padding: 10 }}>
            <View style={{ borderWidth: 1, marginVertical: 10, borderRadius: 10 }}>
                <Text style={{ backgroundColor: '#E0E0E0', borderTopLeftRadius: 9, padding: 10, borderTopRightRadius: 9 }}>Profile</Text>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }} >User Id</Text>
                    <Text style={{ padding: 10 }}>{result.id}</Text>
                </View>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Name</Text>
                    <Text style={{ padding: 10 }}>{result.name}</Text>
                </View>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    <Text style={{ padding: 10 }}>{result.email}</Text>
                </View>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Address</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ padding: 10 }} >City :</Text>
                        <Text style={{ padding: 10 }}>{result?.address?.city}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ padding: 10 }} >Street :</Text>
                        <Text style={{ padding: 10 }}>{result?.address?.street}</Text>
                    </View>
                </View>

            </View>
        </View>




    )
}

export default UserDetailScreen