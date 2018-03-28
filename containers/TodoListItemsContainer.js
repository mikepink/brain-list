import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import {
  fetchItems,
  toggleSecondaryTodos,
  updateItem,
} from '../actions';
import ListOfTodoItems from '../components/ListOfTodoItems';
import SecondaryTodosToggle from '../components/SecondaryTodosToggle';

class TodoListItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {ctrTime: Date.now()};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems(this.props.listID));
  }

  render() {
    const {
      itemsByID,
      itemsByListID,
      listID,
      navigation,
      onChangeText,
      onPressCheckbox,
      onPressSecondaryToggle,
    } = this.props;

    const primaryItems = [];
    const secondaryItems = [];
    (itemsByListID[listID] || []).forEach((itemID) => {
      const item = itemsByID[itemID];
      if (item.status !== -1 || item.updated_time > this.state.ctrTime) {
        primaryItems.push(item);
      } else {
        secondaryItems.push(item);
      }
    });

    const showSecondaryTodos = this.props.todoListView.showSecondaryTodos;
    return (
      <View>
        <ListOfTodoItems
          items={primaryItems}
          listID={listID}
          onChangeText={onChangeText}
          onPressCheckbox={onPressCheckbox}
        />
        <SecondaryTodosToggle
          onPress={() => onPressSecondaryToggle(!showSecondaryTodos)}
          showSecondaryTodos={showSecondaryTodos}
        />
        {
          showSecondaryTodos ? 
            <ListOfTodoItems
              items={secondaryItems}
              listID={listID}
              onChangeText={onChangeText}
              onPressCheckbox={onPressCheckbox}
            /> :
            null
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  itemsByListID: state.itemsByListID.itemsByListID,
  itemsByID: state.itemsByID.itemsByID,
  todoListView: state.todoListView,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  onChangeText: (itemID, newLabel) => dispatch(
    updateItem(itemID, ['label', 'updated_time'], [newLabel, Date.now()])
  ),
  onPressCheckbox: (itemID, newStatus) => dispatch(
    updateItem(itemID, ['status', 'updated_time'], [newStatus, Date.now()])
  ),
  onPressSecondaryToggle: (showSecondaryTodos) => dispatch(
    toggleSecondaryTodos(showSecondaryTodos)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListItemsContainer);