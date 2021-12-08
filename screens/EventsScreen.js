import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Add a curly brackets with navigation word
function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events First Page</Text>
      <Button
        onPress={() => navigation.navigate('EventsSecond')}
        title="Second Screen"
      />
    </View>
  );
}

function EventsSecondScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
      }}>
      <Text>Event Second Page!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
