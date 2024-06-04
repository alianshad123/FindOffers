import {View, Button} from 'react-native';
import { useAuth } from '../utils/AuthContext';

export default function LoginScreen({navigation}) {
  const {setIsLoggedIn} = useAuth();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => handleLogin()} title="Login" />
    </View>
  );
}
