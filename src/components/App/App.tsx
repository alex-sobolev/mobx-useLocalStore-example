import React, { FC } from 'react';
import './App.css';
import { Dog } from '../Dog';
import { Todo } from '../Todo';
import { MainHeader } from '../MainHeader';

export const App: FC = () => {
  return (
    <div className="App">
      <MainHeader />
      <main className="MainContent">
        <Todo />
        <Dog />
      </main>
    </div>
  );
};
