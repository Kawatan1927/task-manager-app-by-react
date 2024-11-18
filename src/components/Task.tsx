import React from 'react';

type Task = {
    id: number;
    title: string;
    completed: boolean;
}

type TaskProps = {
    task: Task;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <li
            style={{
                background: '#f9f9f9',
                margin: '5px 0',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                textDecoration: task.completed ? 'line-through' : 'none',
            }}
        >
            {task.title} {task.completed ? '✔️' : '❌'}
        </li>
    );
};

export default Task;