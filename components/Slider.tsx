import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import {ImageSlider, ImageSliderType} from '@/data/SliderData'
import SliderItem from './SliderItem'
import Animated,{ useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

type Props ={
    itemList: ImageSliderType[]
}

const Slider = ({itemList} : Props) => {

    const scrollX = useSharedValue(0);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    });

    return(
        <View>
            <Animated.FlatList 
            data={itemList} 
            renderItem={({item, index}) => (
            <SliderItem item={item} index={index} scrollX={scrollX}/>
    )}
    horizontal
    showsHorizontalScrollIndicator ={false}
    pagingEnabled
    onScroll={onScrollHandler}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({

})