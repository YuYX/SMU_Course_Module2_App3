import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator()

// export default function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Welcome" component={HomeScreen}/>
//     </Stack.Navigator>
//   )
// }

const dataArray = [
  {
    title: 'What is this?',
    content: 'Christmas. ',
  },
  {
    title: 'Who is this by?',
    content:
      'on December 25.',
  },
  {
    title: 'Why is this?',
    content: 'in the Roman calendar.',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Merry Christmas!</Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={{color: 'green'}}>Welcome</Title>
            <Paragraph>Thank you for downloadiing this app.</Paragraph>
          </Card.Content>
          <Card.Cover
            style={{ marginTop: 10,  height: 300 }}
            source={{
              uri: 'https://cdn2.vectorstock.com/i/1000x1000/19/21/merry-christmas-and-happy-new-2021-year-design-vector-33661921.jpg',
            }}
          />
        </Card>

        <List.Section title="Frequently Asked Questions">
          <List.Accordion title="What is this for?">
            <List.Item description="Christmas is an annual festival commemorating the birth of Jesus Christ." />
          </List.Accordion>
          <List.Accordion title="When will this be?">
            <List.Item description="On December 25." />
          </List.Accordion>
          <List.Accordion title="Where will this be?">
            <List.Item description="Everywhere over the world!" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,     
  },
  card: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
});
