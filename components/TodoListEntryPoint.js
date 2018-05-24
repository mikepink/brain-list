import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { HomeScreenStyles } from '../styles';

const TodoListEntryPoint = ({list, navigation}) => (
  <TouchableOpacity
    onPress={() => {navigation.navigate('List', {listID: list.id, listName: list.name})}}
    style={{...HomeScreenStyles.listItem}}>
    <Text style={{...HomeScreenStyles.listItemText}}>
      {list.name}
    </Text>
    {list.open_items === 0 ? null :
      <View style={{...HomeScreenStyles.listItemBadge}}>
        <Text style={{...HomeScreenStyles.listItemBadgeText}}>{list.open_items}</Text>
      </View>
    }
  </TouchableOpacity>
);

export default TodoListEntryPoint;
