import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import TodoListItem from './TodoListItem';

const ListOfTodoItems = ({items, listID, onChangeText, onPressCheckbox}) => {
  let todos = null;
  if (items) {
    todos = items.map(item =>
      <TodoListItem
        key={item.id}
        item={item}
        listID={listID}
        onChangeText={onChangeText}
        onPressCheckbox={() => onPressCheckbox(item, item.status * -1)}
      />
    );
  }

  return (
    <View>
      {todos}
    </View>
  );
};

export default ListOfTodoItems;
