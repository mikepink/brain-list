import React from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import Checkbox from './Checkbox'
import FadeIn from './FadeIn'
import { TodoListStyles } from '../styles';

const TodoListItem = ({item, listID, onChangeText, onPressCheckbox}) => (
  <FadeIn style={{...TodoListStyles.todoItem}}>
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
  </FadeIn>
);

export default TodoListItem;
