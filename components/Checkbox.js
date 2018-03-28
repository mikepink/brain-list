import React from 'react';
import {
  TouchableOpacity, 
  View
} from 'react-native';

import { CheckboxStyles } from '../styles';

const Checkbox = ({checked = false, onPress}) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    <View
      style={{...CheckboxStyles.root, ...(checked ? CheckboxStyles.rootChecked : {})}}
    />
  </TouchableOpacity>
);

export default Checkbox;