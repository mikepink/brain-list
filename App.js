import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DB from './DB'
import HomeScreen from './HomeScreen'
import ListScreen from './ListScreen'
import rootReducer from './reducers'

// Brain List todo list app
// This app allows people to manage multiple todo lists (eg: groceries)
// Within each todo list, people can create todo items.
// Todo items are marked uncompleted initially. After the person marks
// an item as completed, it will disappear from the list of uncompleted items.
// While viewing a list, people can see previously completed items.

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
  )
);

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    List: {
      screen: ListScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {

  componentDidMount() {
    DB.transaction(tx => {
      // tx.executeSql('DROP table lists');
      // tx.executeSql('DROP table items');
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS lists (id integer primary key not null, name text, creation_time int, updated_time int)',
        null,
        (_, s) => {},
        (_, e) => console.log(e),
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id integer primary key not null, list integer not null, label text, status int, creation_time int, updated_time int, FOREIGN KEY (list) REFERENCES lists(id))',
        null,
        (_, s) => {},
        (_, e) => console.log(e),
      );
    },
    null,
    (_, s) => {},
    (_, e) => console.log(e)
    );
  }
  
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
