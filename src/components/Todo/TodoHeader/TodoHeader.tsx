import React from 'react';
import { useObserver } from 'mobx-react';
import { useRootStore } from '../../../stores';

export const TodoHeader = () => {
  const { todoStore } = useRootStore();

  return useObserver(() => <header className="App-header">{todoStore.todosCount} Todos:</header>);
};
