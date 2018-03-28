import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import { TodoListStyles } from '../styles';

const SecondaryTodosToggle = ({onPress, showSecondaryTodos}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{...TodoListStyles.secondaryTodosToggle}}>
    <Text style={{...TodoListStyles.secondaryTodosToggleText}}>
      {showSecondaryTodos ? 'Hide Completed Todos' : 'View Completed Todos'}
    </Text>
  </TouchableOpacity>
);

export default SecondaryTodosToggle;