import DB from '../DB';

export const UPDATE_ADD_ITEM_TEXT = 'UPDATE_ADD_ITEM_TEXT';
export const UPDATE_ADD_LIST_TEXT = 'UPDATE_ADD_LIST_TEXT';
export const SUBMIT_LIST = 'SUBMIT_LIST';
export const LIST_ADDED = 'LIST_ADDED';
export const SUBMIT_ITEM = 'SUBMIT_ITEM';
export const SUBMIT_ITEM_EDIT = 'SUBMIT_ITEM_EDIT';
export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_EDITED = 'ITEM_EDITED';
export const ITEM_STATUS_TOGGLED = 'ITEM_STATUS_TOGGLED';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REQUEST_ITEMS = 'FETCH_ITEMS';
export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const REQUEST_LISTS = 'FETCH_LISTS';
export const TOGGLE_SECONDARY_TODOS = 'TOGGLE_SECONDARY_TODOS';
export const USER_INPUT_ERROR = 'USER_INPUT_ERROR';

export function requestLists() {
  return {
    type: REQUEST_LISTS,
  };
}

export function receiveLists(resultSet) {
  return {
    type: RECEIVE_LISTS,
    lists: resultSet.rows._array,
  };
}

export function fetchLists() {
  return (dispatch) => {
    dispatch(requestLists());
    DB.transaction((tx) => {
      tx.executeSql(
        'SELECT lists.id, lists.name, lists.updated_time, COUNT(items.id) AS open_items FROM lists LEFT OUTER JOIN items ON items.list = lists.id AND items.status = 1 GROUP BY lists.id ORDER BY lists.updated_time DESC',
        null,
        (tx, resultSet) => {
          dispatch(receiveLists(resultSet));
        },
        (_, e) => console.error(e)
      );
    });
  };
}

export function updateAddListText(addListText) {
  return {
    type: UPDATE_ADD_LIST_TEXT,
    addListText,
  }
}

export function submitList() {
  return {
    type: SUBMIT_LIST,
  };
}

export function listAdded() {
  return {
    type: LIST_ADDED,
  };
}

export function addList(listName = '', now) {
  if (listName.trim() === '') {
    return {type: USER_INPUT_ERROR};
  }

  return (dispatch) => {
    dispatch(submitList());
    DB.transaction(
      tx => {
        tx.executeSql(
          'INSERT INTO lists (name, creation_time, updated_time) VALUES (?, ?, ?);',
          [listName, now, now],
          null,
          (_, error) => console.log('exec error', error),
        )
      },
      null,
      () => {
        dispatch(listAdded());
        dispatch(fetchLists());
      },
      (_, error) => console.log('tx error', error)
    );
  }
}

export function requestItems(listID) {
  return {
    type: REQUEST_ITEMS,
    listID,
  };
}

export function receiveItems(listID, resultSet) {
  return {
    type: RECEIVE_ITEMS,
    items: resultSet.rows._array,
    listID,
  };
}

export function fetchItems(listID) {
  return (dispatch) => {
    dispatch(requestItems());
    DB.transaction((tx) => {
      tx.executeSql(
        'SELECT id, label, status, list, updated_time FROM items WHERE list = ? ORDER BY updated_time DESC',
        [listID],
        (tx, resultSet) => {
          dispatch(receiveItems(listID, resultSet));
        },
        (_, e) => console.error(e)
      );
    });
  };
}

export function updateAddItemText(addItemText) {
  return {
    type: UPDATE_ADD_ITEM_TEXT,
    addItemText,
  }
}

export function submitItem() {
  return {
    type: SUBMIT_ITEM,
  };
}

export function itemAdded(itemID, listID) {
  return {
    type: ITEM_ADDED,
    itemID,
    listID,
  };
}

export function submitItemEdit(item, columns, values) {
  return {
    type: SUBMIT_ITEM_EDIT,
    item,
    columns,
    values,
  };
}

export function addItem(label = '', listID, now) {
  label = label.trim();
  if (label === '') {
    return {type: USER_INPUT_ERROR};
  }

  return (dispatch) => {
    dispatch(submitList());
    DB.transaction(
      tx => {
        tx.executeSql(
          'INSERT INTO items (label, list, status, creation_time, updated_time) VALUES (?, ?, ?, ?, ?);',
          [label, listID, 1, now, now],
          (_, resultSet) => dispatch(itemAdded(resultSet.insertId, listID)),
          (_, error) => console.log('exec error', error),
        )
      },
      null,
      () => dispatch(fetchItems(listID)),
      (_, error) => console.log('tx error', error),
    );
  }
}

function updateColumnsStatement(columns) {
  return columns.map(
    (c) => c + ' = ?'
  ).join(', ');
}

export function updateItem(item, columns, values) {
  return (dispatch) => {
    dispatch(submitItemEdit(item, columns, values));
    DB.transaction(
      tx => {
        tx.executeSql(
          'UPDATE items SET ' + updateColumnsStatement(columns) + ' WHERE id = ?',
          [...values, item.id],
          null,
          (_, error) => console.log('exec error', error),
        )
      },
      null,
      null,
      (_, error) => console.log('tx error', error),
    )
  };
}

export function toggleSecondaryTodos(showSecondaryTodos) {
  return {type: TOGGLE_SECONDARY_TODOS, showSecondaryTodos};
}
