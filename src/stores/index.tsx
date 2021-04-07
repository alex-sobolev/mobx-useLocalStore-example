import React, { FC } from 'react';
import { useLocalStore } from 'mobx-react';
import { TodoStore, ITodoStore } from './TodoStore';
import { IDogStore, DogStore } from './DogStore';

interface IStoreContext {
  todoStore: ITodoStore;
  dogStore: IDogStore;
}

export const StoreContext = React.createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: FC = ({ children }) => {
  const todoStore = useLocalStore(TodoStore);
  const dogStore = useLocalStore(DogStore);
  const store = { todoStore, dogStore };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => {
  const rootStore = React.useContext(StoreContext);

  if (!rootStore) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return rootStore;
};
