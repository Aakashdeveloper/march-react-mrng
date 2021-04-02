import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Switch,Modal } from 'react-native';

 function App() {
   const [outputText,setText] = useState("Test Native App");
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>

      <Text>Open up App.js to start working on your app!</Text>
      <Text>{outputText}</Text>
      <Button title="Click Me" onPress={()=> setText('Text Changed')}/>
      <Button title="Revert Me" onPress={()=> setText('Text Native App')}/>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
