import React from 'react';
import { Text, View } from 'react-native';

import AddTodoListContainer from './containers/AddTodoListContainer'
import TodoListsContainer from './containers/TodoListsContainer'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Todo Lists',
  };

  render() {
    return (
      <View>
        <AddTodoListContainer />
        <TodoListsContainer navigation={this.props.navigation} />
      </View>
    );
  }
}
