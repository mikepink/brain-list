import React from 'react';
import {
  View,
} from 'react-native';

import TodoListEntryPoint from './TodoListEntryPoint'

const ListOfTodoLists = ({lists, navigation}) => {
  let listItems = null;
  if (lists) {
    listItems = lists.map(list =>
      <TodoListEntryPoint
        key={list.id}
        list={list}
        navigation={navigation}
      />
    );
  }

  return (
    <View>
      {listItems}
    </View>
  );
};

export default ListOfTodoLists;
