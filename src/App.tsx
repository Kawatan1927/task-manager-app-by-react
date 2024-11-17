import React from 'react';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const tasks = [
    { id: 1, title: 'タスク1', completed: false },
    { id: 2, title: 'タスク2', completed: true },
    { id: 3, title: 'タスク3', completed: false },
  ];

  return (
      <div className="App">
        <h1>タスク管理アプリ</h1>
        <TaskList tasks={tasks} />
      </div>
  );
};

export default App;
