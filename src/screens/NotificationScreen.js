import {  View, Button } from 'react-native';
import Strings from '../constants/Strings';

export default function NotificationScreen({navigation}){
    return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  onPress={() => navigation.navigate(Strings.homeNavigator)}
                  title="Go to Home"
                />
              </View>
            );
}