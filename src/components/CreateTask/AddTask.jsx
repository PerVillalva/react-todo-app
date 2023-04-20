import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { HiPlusCircle } from 'react-icons/hi';
import {
    NewTaskContent,
    AddTaskFooter,
    AddTaskBtnContainer,
    AddTaskContainer,
} from './AddTask.styled';

const AddTask = ({ setTaskList }) => {
    const [taskDescription, setTaskDescription] = useState('');
    const [creatingTask, setCreatingTask] = useState(false);

    const cancelCreateHandler = () => {
        setTaskDescription('');
        setCreatingTask(false);
    };

    const descriptionChangeHandler = (e) => {
        setTaskDescription(e.target.value);
    };

    const addTaskHandler = (e) => {
        e.preventDefault();

        if (taskDescription.trim() !== '') {
            setTaskList((taskList) => {
                return [
                    ...taskList,
                    {
                        id: uuid(),
                        description: taskDescription,
                        editing: false,
                        completed: false,
                    },
                ];
            });
            setTaskDescription('');
        } else {
            // invalid input, show error message
            alert(
                'You cannot submit an empty task. Please enter a task description.'
            );
        }
    };

    return (
        <AddTaskContainer>
            {creatingTask ? (
                <form onSubmit={addTaskHandler}>
                    <NewTaskContent>
                        <input
                            autoFocus
                            type='text'
                            placeholder='What are you working on?'
                            onChange={descriptionChangeHandler}
                            value={taskDescription}
                        />
                    </NewTaskContent>

                    <AddTaskFooter>
                        <button
                            className='cancel-btn'
                            onClick={() => cancelCreateHandler()}
                        >
                            Cancel
                        </button>
                        <button type='submit' className='create-btn'>
                            Create
                        </button>
                    </AddTaskFooter>
                </form>
            ) : (
                <AddTaskBtnContainer>
                    <button onClick={() => setCreatingTask(true)}>
                        {' '}
                        <HiPlusCircle className='plus-icon' />
                        <span>Add Task</span>
                    </button>
                </AddTaskBtnContainer>
            )}
        </AddTaskContainer>
    );
};

export default AddTask;
