import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Slider from '@/components/Slider'
import { ImageSlider } from '@/data/SliderData'

const Page = () => {
    return(
        <View style={styles.Container}>
            <Slider itemList={ImageSlider}/>
        </View>
    )
}

export default Page 

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center'
    }
})

