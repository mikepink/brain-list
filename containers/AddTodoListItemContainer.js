import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, updateAddItemText } from '../actions';
import AddTodoListItem from '../components/AddTodoListItem';

const mapStateToProps = state => ({
  inputValue: state.addItem.addItemText,
});

const mapDispatchToProps = dispatch => ({
  addItem: (itemName, listID) => {
    dispatch(addItem(itemName, listID, Date.now()))
  },
  onChangeText: text => dispatch(updateAddItemText(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodoListItem);