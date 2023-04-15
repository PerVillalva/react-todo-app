import { useState } from 'react';
import Card from '../../UI/Card';
import { HiPlusCircle } from 'react-icons/hi';

const AddTask = ({ onAddTask }) => {
    const [taskDescription, setTaskDescription] = useState('');

    const descriptionChangeHandler = (e) => {
        setTaskDescription(e.target.value);
    };

    const addTaskHandler = (event) => {
        event.preventDefault();

        if (taskDescription.trim() !== '') {
            onAddTask(taskDescription);
            setTaskDescription('');
        } else {
            // invalid input, show error message
            alert(
                'You cannot submit an empty task. Please enter a task description.'
            );
        }
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
                    <button type='submit'>
                        {' '}
                        <HiPlusCircle className='plus-icon' />
                        <spam>Add Task</spam>
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default AddTask;
