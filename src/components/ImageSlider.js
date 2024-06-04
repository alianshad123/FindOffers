import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";


const ImageSlider = ({images}) => {

    const {width} =Dimensions.get('window');
    const height =width * 0.5;
    const scrollViewRef = useRef(null);

    const [active, setActive] = useState(0)

    const change = ({nativeEvent}) =>  {
        const slide = 
        Math.ceil(
            nativeEvent.contentOffset.x /nativeEvent.layoutMeasurement.width,
        );
        if(slide !=active) {
            setActive(slide)
        }

    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prevActive) => {
              const nextIndex = prevActive === images.length - 1 ? 0 : prevActive + 1;
              scrollViewRef.current.scrollTo({
                x: nextIndex * width,
                animated: true,
              });
              return nextIndex;
            });
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
}, [images.length, width]);


    return (
        <View>
            <ScrollView
            pagingEnabled
            ref={scrollViewRef}
            horizontal
            onScroll={change}
            showsHorizontalScrollIndicator ={false}
            style= {{width,height}}
            scrollEventThrottle={16} >
            {images.map((image,index) => (
                <Image
                 key={index}
                 source={typeof image === 'string' ? { uri: image } : image}
                 style={{width,height,resizeMode:'cover'}}
                >
                </Image>
            ))}
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((i,k) => (
                  <Text
                  key={k} style={k==active ? styles.activeDot : styles.dot}>
                   •
                  </Text>  
                ))}

            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        alignSelf: 'center',
    },
    dot: {
        color: '#888',
        fontSize: 50
    },
    activeDot:{
        color: '#fff',
        fontSize:50,
    }

});

export default ImageSlider;