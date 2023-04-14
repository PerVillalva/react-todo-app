import { useState } from 'react';
import Card from '../../UI/Card';

const AddTask = ({ onAddTask }) => {
    const [taskDescription, setTaskDescription] = useState('');

    const descriptionChangeHandler = (e) => {
        setTaskDescription(e.target.value);
    };

    const addTaskHandler = (event) => {
        event.preventDefault();

        onAddTask(taskDescription);

        setTaskDescription('');
    };

    return (
        <Card>
            <form onSubmit={addTaskHandler}>
                <div className='task-input'>
                    <input
                        id='description'
                        type='text'
                        placeholder='What are you working on?'
                        onChange={descriptionChangeHandler}
                        value={taskDescription}
                    />
                </div>
                <div className='add-btn-container'>
                    <button type='submit'>Add Task</button>
                </div>
            </form>
        </Card>
    );
};

export default AddTask;
