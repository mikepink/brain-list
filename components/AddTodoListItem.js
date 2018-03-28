import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import { TextInputStyles } from '../styles';

const AddTodoListItem = ({addItem, onChangeText, inputValue, listID}) => (
  <View style={{...TextInputStyles.rootView}}>
    <TextInput
      onChangeText={onChangeText}
      onSubmitEditing={() => addItem(inputValue, listID)}
      placeholder="+ Add a todo"
      returnKeyType="go"
      value={inputValue}
    />
  </View>
);

export default AddTodoListItem;