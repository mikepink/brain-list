import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { HomeScreenStyles } from '../styles';

const TodoListEntryPoint = ({badgeValue, list, navigation}) => (
  <TouchableOpacity
    onPress={() => {navigation.navigate('List', {listID: list.id, listName: list.name})}}
    style={{...HomeScreenStyles.listItem}}>
    <Text style={{...HomeScreenStyles.listItemText}}>
      {list.name}
    </Text>
    {badgeValue === 0 ? null :
      <View style={{...HomeScreenStyles.listItemBadge}}>
        <Text style={{...HomeScreenStyles.listItemBadgeText}}>{badgeValue}</Text>
      </View>
    }
  </TouchableOpacity>
);

export default TodoListEntryPoint;
