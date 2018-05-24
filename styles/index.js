export const HomeScreenStyles = {
  listItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#F2E9E1',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  listItemBadge: {
    backgroundColor: '#1693A5',
    borderRadius: 4,
    padding: 4,
  },
  listItemBadgeText: {
    color: '#FFFFFF',
  },
  listItemText: {
    flex: 9,
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
