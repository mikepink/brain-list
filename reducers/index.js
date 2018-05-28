import { combineReducers } from 'redux';

import {
  ITEM_ADDED,
  ITEM_EDITED,
  ITEM_STATUS_TOGGLED,
  LIST_ADDED,
  RECEIVE_ITEMS,
  RECEIVE_LISTS,
  REQUEST_ITEMS,
  REQUEST_LISTS,
  SUBMIT_ITEM,
  SUBMIT_ITEM_EDIT,
  SUBMIT_LIST,
  TOGGLE_SECONDARY_TODOS,
  UPDATE_ADD_ITEM_TEXT,
  UPDATE_ADD_LIST_TEXT,
} from '../actions'

const addList = (
  state = {addListText: '', isSubmitting: false},
  action,
) => {
  switch (action.type) {
    case UPDATE_ADD_LIST_TEXT:
      return {...state, addListText: action.addListText}
    case SUBMIT_LIST:
      return {...state, isSubmitting: true};
    case LIST_ADDED:
      return {...state, addListText: '', isSubmitting: false};
    default:
      return state;
  }
};

const lists = (
  state = {isFetching: false, lists: []},
  action,
) => {
  switch (action.type) {
    case REQUEST_LISTS:
      return {...state, isFetching: true};
    case RECEIVE_LISTS:
      return {...state, isFetching: false, lists: action.lists};
    default:
      return state;
  }
};

const badgesByListID = (
  state = {},
  action,
) => {
  let curValue;
  switch (action.type) {
    case RECEIVE_LISTS:
      const newState = {};
      action.lists.forEach(list => {
        newState[list.id] = list.open_items;
      });
      return newState;
    case ITEM_ADDED:
      curValue = state.hasOwnProperty(action.listID) ? state[action.listID] : 0;
      return {...state, [action.listID]: curValue + 1};
    case SUBMIT_ITEM_EDIT:
      const listID = action.item.list;
      const statusIdx = action.columns.indexOf('status');
      if (statusIdx === -1) {
        return state;
      }

      curValue = state.hasOwnProperty(listID) ? state[listID] : 0;
      // Incomplete status value is 1, complete is -1.
      return {...state, [listID]: curValue + (action.values[statusIdx] - action.item.status) / 2};
    default:
      return state;
  }
}

const addItem = (
  state = {addItemText: '', isSubmitting: false},
  action,
) => {
  switch (action.type) {
      case UPDATE_ADD_ITEM_TEXT:
        return {...state, addItemText: action.addItemText}
      case SUBMIT_ITEM:
        return {...state, isSubmitting: true};
      case ITEM_ADDED:
        return {...state, addItemText: '', isSubmitting: false};
      default:
        return state;
  }
};

const itemsByListID = (
  state = {isFetching: false, itemsByListID: {}},
  action,
) => {
  switch (action.type) {
    case REQUEST_ITEMS:
      return {...state, isFetching: true}
    case RECEIVE_ITEMS:
      const itemsByListID = Object.assign({}, state.itemsByListID);
      itemsByListID[action.listID] = action.items.map((item) => item.id);
      return {...state, isFetching: false, itemsByListID};
    default:
      return state;
  }
};

const itemsByID = (
  state = {isFetching: false, itemsByID: {}},
  action,
) => {
  let itemsByID;
  switch (action.type) {
    case REQUEST_ITEMS:
      return {...state, isFetching: true}
    case RECEIVE_ITEMS:
      itemsByID = Object.assign({}, state.itemsByID);
      action.items.forEach(item => {
        itemsByID[item.id] = item;
      });
      return {...state, isFetching: false, itemsByID};
    case SUBMIT_ITEM_EDIT:
      itemsByID = Object.assign({}, state.itemsByID);
      action.columns.forEach((column, i) => {
        itemsByID[action.item.id][column] = action.values[i];
      });
      return {...state, itemsByID};
    default:
      return state;
  }
};

const todoListView = (
  state = {showSecondaryTodos: false,},
  action,
) => {
  switch (action.type) {
    case TOGGLE_SECONDARY_TODOS:
      return {...state, showSecondaryTodos: action.showSecondaryTodos};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  addItem,
  addList,
  badgesByListID,
  itemsByID,
  itemsByListID,
  lists,
  todoListView,
});

export default rootReducer;
