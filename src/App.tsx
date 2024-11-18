import React, {useState} from 'react';
import TaskList from './components/TaskList';
import TaskForm from "./components/TaskForm";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]> ([
    { id: 1, title: 'タスク1', completed: false },
    { id: 2, title: 'タスク2', completed: true },
    { id: 3, title: 'タスク3', completed: false },
  ]);

  const addTask = (title: string) => {
      const newTask: Task = {
          id: tasks.length +1,
          title,
          completed: false,
      };
      setTasks([...tasks, newTask]);
  };

  return (
      <div className="App">
        <h1>タスク管理アプリ</h1>
        <TaskForm onAddTask={addTask}/>
        <TaskList tasks={tasks} />
      </div>
  );
};

export default App;
