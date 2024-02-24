import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function HomeScreen() {

    const [category, setCategory] = useState([0])
    const [subCategory, setSubCategory] = useState('')
    const [id, setId] = useState('')

    const fetchCategory = async () => {
        const categoryParams = {
            "CategoryId": 0,
            "DeviceManufacturer": "Google",
            "DeviceModel": "Android SDK built for x86",
            "DeviceToken": " ",
            "PageIndex": 1
        }
        const categoryData = await axios.post('http://esptiles.imperoserver.in/api/API/Product/DashBoard',
            { params: categoryParams },
        ).then((data) => {
            console.log("data?.data?.Result?.Category", data?.data?.Result?.Category)
            setCategory(data?.data?.Result?.Category)
        })
            .catch(e => {
                console.log("error", e)
            })

    }

    const fetchSubCategory = async (id) => {
        console.log("id", id)
        const subCategoryParams = {
            "CategoryId": id,
            "PageIndex": 2
        }
        await axios.post('http://esptiles.imperoserver.in/api/API/Product/DashBoard',
            { params: subCategoryParams }
        ).then((data) => {
            // console.log("fetchSubCategory data====>", data?.data?.Result?.Category)
            setSubCategory(data?.data?.Result?.Category)
        })
            .catch(e => {
                console.log("error", e)
            })
    }

    const fetchProduct = async () => {
        const productParams = {
            "PageIndex": 2,
            "SubCategoryId": 71
        }
        await axios.post('http://esptiles.imperoserver.in/api/API/Product/DashBoard',
            { params: productParams }
        ).then((data) => {
            console.log("fetchProduct data====>", data?.data?.Result)
        })
            .catch(e => {
                console.log("error", e)
            })
    }

    useEffect(() => {
        console.log("first", category)
        fetchCategory();
        fetchSubCategory('59')
        setId('59')
        // fetchProduct()
    }, [])
    return (
        <>
            <FlatList
                horizontal
                data={category}
                renderItem={({ item, index }) => {
                    // let selectedCategory = item.
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                setId(item?.Id)
                                fetchSubCategory(item?.Id)
                            }}
                            style={{
                                padding: 15,
                                backgroundColor: 'black',
                            }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 15
                            }}>{item?.Name}</Text>

                        </TouchableOpacity>
                    )
                }}
            />
            <ScrollView>
                <FlatList
                    data={subCategory}
                    renderItem={({ item }) => {
                        // console.log("subcategory===>", item, id)
                        let hasData = item?.Id == id
                        console.log("gassss", hasData)
                        return (
                            <View style={{
                                // paddingLeft: 10,
                                marginTop: 8
                            }}>
                                {item?.SubCategories ? item?.SubCategories.map((item) => {
                                    return (
                                        <>
                                            <Text style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                marginVertical: 8,
                                                paddingHorizontal: 15,


                                            }}>{item?.Name}</Text>
                                            <ScrollView showsHorizontalScrollIndicator={false}
                                                contentContainerStyle={{ flexGrow: 1, marginLeft: 5 }}
                                                horizontal>
                                                {item?.Product?.map((item) => {
                                                    return (
                                                        <View style={{ flex: 1, maxWidth: 100, marginHorizontal: 12 }}>
                                                            <Image src={item.ImageName}
                                                                style={{
                                                                    height: 100, width: 100,
                                                                    borderRadius: 8
                                                                }} />
                                                            <Text numberOfLines={2} style={{
                                                                color: 'black',
                                                                fontSize: 12,
                                                                textTransform: "capitalize",
                                                                marginVertical: 5
                                                            }}>{item.Name}</Text>
                                                        </View>
                                                    )
                                                })}
                                            </ScrollView>
                                        </>
                                    )
                                })
                                    : null}


                            </View>
                        )
                    }}
                />
            </ScrollView>
        </>

    )
}