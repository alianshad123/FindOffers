import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {AuthProvider} from './utils/AuthContext';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

// const Drawer = createDrawerNavigator();

// export default function App () {
//   // State to keep track of the counter
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if(Platform.OS ==='android'){
//       SplashScreen.hide();
//     }

//   },[]);

//   // Function to increment the counter
//   const incrementCounter = () => {
//     setCount(count + 1);
//   };

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );

//   function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       </View>
//     );
//   }

//   function NotificationsScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </View>
//     );
//   }

//   // return (
//   //   <SafeAreaView style={styles.container}>
//   //     <View style={styles.header}>
//   //       <Text style={styles.title}>Welcome to My React Native App!</Text>
//   //     </View>
//   //     <View style={styles.content}>
//   //       <Text style={styles.counterText}>You clicked {count} times</Text>
//   //       <Button
//   //         title="Press me"
//   //         onPress={incrementCounter}
//   //         color="#841584"
//   //       />
//   //     </View>
//   //   </SafeAreaView>
//   // );
// };

// // Styles for the app
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//     backgroundColor: '#f5fcff',
//   },
//   header: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   content: {
//     alignItems: 'center',
//   },
//   counterText: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
// });
