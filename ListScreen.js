import { SQLite } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

import AddTodoListItemContainer from './containers/AddTodoListItemContainer';
import TodoListItemsContainer from './containers/TodoListItemsContainer';

export default class ListScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return {
      title: params.listName || 'Untitled List',
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const listID = params.listID;
    
    return (
      <View>
        <AddTodoListItemContainer listID={listID} />
        <TodoListItemsContainer listID={listID} />
      </View>
    );
  }
}