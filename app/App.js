import { View, Text } from 'react-native'
import React from 'react'
import MainStackNavigation from './navigation/MainStackNavigation'


export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <MainStackNavigation />
        </View>
    )
}