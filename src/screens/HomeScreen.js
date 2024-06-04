import {View, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image} from 'react-native';
import Strings from '../constants/Strings';
import React from "react";
import {useNavigation} from '@react-navigation/native';
import ImageSlider from '../components/ImageSlider';

export default function HomeScreen() {
  const navigation = useNavigation();

  const images = [
    'https://fastly.picsum.photos/id/906/300/200.jpg?hmac=WkkxahWfLBir2f3u6ewCC5eLdxOevIcK8dsEpaEN8W8',
    'https://fastly.picsum.photos/id/906/300/200.jpg?hmac=WkkxahWfLBir2f3u6ewCC5eLdxOevIcK8dsEpaEN8W8',
    'https://fastly.picsum.photos/id/906/300/200.jpg?hmac=WkkxahWfLBir2f3u6ewCC5eLdxOevIcK8dsEpaEN8W8',
    'https://fastly.picsum.photos/id/906/300/200.jpg?hmac=WkkxahWfLBir2f3u6ewCC5eLdxOevIcK8dsEpaEN8W8'
  ]

  return (
    <SafeAreaView style={styles.container}>
    <ImageSlider
    images={images}
    >
    </ImageSlider>
  
    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate(Strings.detailScreen)}
    />
  </View> */}
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  DrawerButton: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  ButtonText: {
    color: "#fff",
  },
});