export const HomeScreenStyles = {
  listItem: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F2E9E1',
    borderBottomWidth: 2,
    padding: 10,
  },
  listItemText: {
    fontSize: 18,
  },
};

export const TextInputStyles = {
  rootView: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBE86E',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    padding: 10,
    marginTop: 20,
  },
};

export const TodoListStyles = {
  todoItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#F2E9E1',
    borderBottomWidth: 2,
    flexDirection: 'row',
    padding: 10,
  },
  todoText: {
    fontSize: 18,
  },
  completedTodoText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  todoTextWrapper: {
    flex: 1,
    marginLeft: 8,
  },
  secondaryTodosToggle: {
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: 20,
    marginTop: 20, 
  },
  secondaryTodosToggleText: {
    color: '#999999',
    textAlign: 'center',
  },
};

export const CheckboxStyles = {
  root: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBE86E',
    borderRadius: 12,
    borderWidth: 2,
    height: 24,
    width: 24,
  },
  rootChecked: {
    backgroundColor: '#CBE86E',
  },
};