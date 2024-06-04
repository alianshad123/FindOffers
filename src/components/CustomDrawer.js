import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: 'green',
          marginTop: -50,
          zIndex: 10,
        }}>
        <ImageBackground
          source={require('../../assets/ic_drawer_bg.jpg')}
          style={{padding: 20}}>
          <Image
            alt="Not Find"
            source={require('../../assets/user.png')}
            style={styles.userAvatar}></Image>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
              
            }}>
            Anshad M
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;    

const styles = StyleSheet.create({
  userAvatar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30,
  },
  switchTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    paddingVertical: 5,
  },
  preferences: {
    fontSize: 16,
    color: '#ccc',
    paddingTop: 10,
    fontWeight: '500',
    paddingLeft: 20,
  },
  switchText: {
    fontSize: 17,
    color: '',
    paddingTop: 10,
    fontWeight: 'bold',
  },
});
