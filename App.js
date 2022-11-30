import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>LootBag</Text>
      <Text style={styles.subText}>What kinda bag you caryin.</Text>
      <Button title="Log In" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  mainText: {
    margin: 10,
    padding: 10,
    borderWidth: 12,
    borderRadius: 25,
    borderColor: "gray",
    
  },

  subText: {
    
  },

  button: {
    margin: 10,
    padding: 10,
    borderWidth: 36,
    borderRadius: 50,
    borderColor: "gray",
  }
});