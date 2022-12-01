import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image, Alert} from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Image
         style={styles.logo}
         source={require('./assets/favicon.png')}
         />
        <Text style={{
          fontSize: 12,
          padding: 7,
          marginTop: 10,
          borderWidth: 2,
          borderRadius: 15,
          borderColor: 'gray',
          }}>Filling LootBags...
        </Text>
      </View>
      <View style={{
        paddingBottom: 40,

      }}>
        <Button title='Enter'
        onPress={() => Alert.alert('Fuck You')}
        />       
      </View>
      <View style={{
        paddingBottom: 40,

      }}>
        <Button title='Enter'
        onPress={() => Alert.alert('Fuck You')}
        />       
      </View>
    </View>
  );
}

export function LandingPage() {
  return (
    <View>
    </View>
    );
  }

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
  },
  logo: {
    width: 150,
    height: 150,
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   paddingRight: 12,
  //   marginBottom: 24,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#cccccc'
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: '#cccccc',
  //   width: '70%', //this takes 80% of the containers width
  //   marginRight: 8,
  //   padding: 8,
  // },
  // goalsContainer: {
  //   flex: 6,
  //   paddingTop: 10
  // }
});