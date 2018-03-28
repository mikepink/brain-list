import React from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import Checkbox from './Checkbox'
import { TodoListStyles } from '../styles';

const TodoListItem = ({item, listID, onChangeText, onPressCheckbox}) => (
  <View
    style={{...TodoListStyles.todoItem}}>
    <Checkbox checked={item.status === -1} onPress={onPressCheckbox} />
    <View style={{...TodoListStyles.todoTextWrapper}}>
      {
        item.status === -1 ?
          <Text
            style={{...TodoListStyles.completedTodoText}}>
            {item.label}
          </Text> :
          <TextInput
            onChangeText={(text) => onChangeText(item.id, text)}
            returnKeyType="done"
            style={{...TodoListStyles.todoText}}
            value={item.label}
          />
      }
    </View>
  </View>
);

export default TodoListItem;