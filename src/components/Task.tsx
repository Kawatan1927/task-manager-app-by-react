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
        <li>
            <span style={{textDecoration: task.completed ? "line-through" : "none"}}>
                {task.title}
            </span>
        </li>
    );
};

export default Task;