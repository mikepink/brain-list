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
    const { badgesByListID, lists, navigation } = this.props;
    return (
      <ListOfTodoLists
        badgesByListID={badgesByListID}
        lists={lists}
        navigation={navigation}
      />
    );
  }
}

const mapStateToProps = state => ({
  badgesByListID: state.badgesByListID,
  lists: state.lists.lists,
});

export default connect(
  mapStateToProps,
)(TodoListsContainer);
