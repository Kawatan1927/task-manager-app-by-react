import React from 'react';
import Task from './Task';

type TaskListProps = {
    tasks: Task[];
};

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    return(
        <ul　style={{ padding: '0' }}>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </ul>
    )
}

export default TaskList;