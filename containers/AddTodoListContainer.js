import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addList, updateAddListText } from '../actions';
import AddTodoList from '../components/AddTodoList';

const mapStateToProps = state => ({
  inputValue: state.addList.addListText,
});

const mapDispatchToProps = dispatch => ({
  addTodoList: listName => {dispatch(addList(listName, Date.now()))},
  onChangeText: text => dispatch(updateAddListText(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodoList);