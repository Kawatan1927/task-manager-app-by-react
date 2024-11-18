import React, { useState, FormEvent } from 'react';
import TextInput from './TextInput';
import Button from './Button';

type  TaskFormProps = {
    onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({onAddTask}) => {
    const [title, setTitle] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim()){
            onAddTask(title.trim());
            setTitle("");
            setError("");
        }else {
            setError("");
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <TextInput value={title} onChange={setTitle} placeholder="新しいタスクを入力"/>
            {error && <p style={{color: "red"}}>{error}</p>}
            <Button onclick={() => {}} label="追加"/>
        </form>
    );

}
export default TaskForm;