import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MainScreen() {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: 'black',
                padding: 10,
                width: 100
            }}
                onPress={() => {
                    navigation.navigate('Home')
                }}
            >
                <Text style={{
                    color: 'white'
                }}>First task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: 'black',
                padding: 10,
                marginVertical: 10
            }}
                onPress={() => {
                    navigation.navigate('Strip')
                }}
            >
                <Text style={{
                    color: 'white'
                }}>Second task</Text>
            </TouchableOpacity>
        </View>
    )
}