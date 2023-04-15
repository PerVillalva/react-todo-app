import { useState } from 'react';
import Card from '../../UI/Card';
import { HiPlusCircle } from 'react-icons/hi';

const AddTask = ({ onAddTask, taskList }) => {
    const [taskDescription, setTaskDescription] = useState('');
    console.log(taskList.length);

    const descriptionChangeHandler = (e) => {
        setTaskDescription(e.target.value);
    };

    const addTaskHandler = (event) => {
        event.preventDefault();

        if (taskList.length >= 4) {
            // invalid input, show error message
            alert(
                "You can't have more than 4 active tasks. Please clean your current tasks before adding new ones."
            );
        } else {
            if (taskDescription.trim() !== '') {
                onAddTask(taskDescription);
                setTaskDescription('');
            } else {
                // invalid input, show error message
                alert(
                    'You cannot submit an empty task. Please enter a task description.'
                );
            }
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
                        <span>Add Task</span>
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default AddTask;
