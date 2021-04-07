import React from 'react';
import { useObserver } from 'mobx-react';
import { useRootStore } from '../../../stores';

export const TodoHeader = () => {
  const { todoStore } = useRootStore();
  console.log('header');
  return useObserver(() => <header className="App-header">{todoStore.todosCount} Todos:</header>);
};
