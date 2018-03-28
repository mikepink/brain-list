import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import { HomeScreenStyles } from '../styles';

const TodoListEntryPoint = ({list, navigation}) => (
  <TouchableOpacity
    onPress={() => {navigation.navigate('List', {listID: list.id, listName: list.name})}}
    style={{...HomeScreenStyles.listItem}}>
    <Text style={{...HomeScreenStyles.listItemText}}>
      {list.name}
    </Text>
  </TouchableOpacity>
);

export default TodoListEntryPoint;