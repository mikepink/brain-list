import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLists } from '../actions';
import ListOfTodoLists from '../components/ListOfTodoLists';

class TodoListsContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLists());
  }

  render() {
    const { lists, navigation } = this.props;
    return (
      <ListOfTodoLists
        lists={lists}
        navigation={navigation}
      />
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists.lists,
});

export default connect(
  mapStateToProps,
)(TodoListsContainer);