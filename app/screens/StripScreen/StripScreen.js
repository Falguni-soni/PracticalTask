import { View, Text, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function StripScreen() {
    const navigation = useNavigation()
    const [selectedColor, setSelectedColor] = useState('#000000');
    // const Colors = [''];

    const strip = [
        {
            name: 'Total Hardness (ppm)',
            count: [0, 1, 2, 3, 4]
        },
        {
            name: 'Total Chlorine (ppm)',
            count: [0, 1, 2, 3, 4]
        },
        {
            name: 'Free Chlorine (ppm)',
            count: [0, 1, 2, 3, 4]
        },
        {
            name: 'pH (ppm)',
            count: [0, 1, 2, 3, 4]
        },
        {
            name: 'Total Alkalinity (ppm)',
            count: [0, 1, 2, 3, 4]
        },
        {
            name: 'Cyanuric Acid (ppm)',
            count: [0, 1, 2, 3, 4]
        },

    ]
    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <TouchableOpacity style={{
                alignItems: 'center',
                alignSelf: 'flex-end',
                backgroundColor: 'grey',
                borderRadius: 15,
                marginVertical: 25,
                marginHorizontal: 10,
                paddingHorizontal: 15,
                paddingVertical: 5
            }}
                onPress={() => {
                    navigation.navigate('Main')
                }}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 15
                }}>Next</Text>
            </TouchableOpacity>

            <View>
                <Text style={{
                    color: "blue",
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginHorizontal: 20
                }}>Test Strip</Text>

                <View>
                    <FlatList
                        data={strip}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginHorizontal: 20
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            color: 'gray'
                                        }}>{item.name}</Text>
                                        <TextInput style={{
                                            height: 40,
                                            margin: 12,
                                            borderWidth: 0.5,
                                            paddingHorizontal: 20,
                                            borderRadius: 10
                                        }}
                                            placeholder='0' />
                                    </View>

                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        margin: 10
                                    }}>
                                        {item?.count?.map((item) => {
                                            return (
                                                <View style={{
                                                    height: 20,
                                                    width: 60,
                                                    borderRadius: 5,
                                                    backgroundColor: 'red'
                                                }}></View>
                                            )
                                        })}
                                    </View>

                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}