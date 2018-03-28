import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import { TextInputStyles } from '../styles';

const AddTodoList = ({addTodoList, onChangeText, inputValue}) => (
  <View style={{...TextInputStyles.rootView}}>
    <TextInput
      onChangeText={onChangeText}
      onSubmitEditing={() => addTodoList(inputValue)}
      placeholder="+ Add a list..."
      returnKeyType="go"
      value={inputValue}
    />
  </View>
);

export default AddTodoList;