import { useState } from 'react';
import Card from '../../UI/Card';
import { HiPlusCircle } from 'react-icons/hi';
import { NewTaskContent, AddTaskBtnContainer } from './AddTask.styled';

const AddTask = ({ onAddTask, taskList }) => {
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
                <NewTaskContent>
                    <input
                        type='text'
                        placeholder='What are you working on?'
                        onChange={descriptionChangeHandler}
                        value={taskDescription}
                    />
                </NewTaskContent>

                <AddTaskBtnContainer>
                    <button type='submit'>
                        {' '}
                        <HiPlusCircle className='plus-icon' />
                        <span>Add Task</span>
                    </button>
                </AddTaskBtnContainer>
            </form>
        </Card>
    );
};

export default AddTask;
