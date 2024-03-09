import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomNav from './src/components/navigations/BottomNav';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
function App(): React.JSX.Element {
  console.log("hola");

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 2}} colors={['#582823',   '#1c1a18']} style={styles.linearGradient}>
      <NavigationContainer theme={navTheme}>
        <BottomNav />
      </NavigationContainer>
    </LinearGradient>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
export default App;
