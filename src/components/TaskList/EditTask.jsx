import { useContext, useState } from 'react';
import { TaskListContext } from '../../utils/TaskListContext';
import {
    EditTaskContainer,
    TaskContainer,
    EditTaskFooter,
} from './TaskList.styled';

const EdiTtask = ({ description, id, updateTaskListFunction }) => {
    const { taskList, setTaskList } = useContext(TaskListContext);
    const [prevDesc] = useState(description);

    const handleDeleteTask = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    };

    const handleCancelEditing = (prevDescription) => {
        // If the task is being edited, return description to previous one and disable editing mode
        updateTaskListFunction((task) =>
            task.editing
                ? { ...task, description: prevDescription, editing: false }
                : task
        );
    };

    const handleDescriptionChange = (event, id) => {
        // Update description to reflect live changes in the task with given id
        updateTaskListFunction((task) =>
            task.id === id ? { ...task, description: event.target.value } : task
        );
    };

    const handleSaveTask = (id, newDescription) => {
        // Save updated description of the task with given id and disable editing mode
        updateTaskListFunction((task) =>
            task.id === id
                ? { ...task, description: newDescription, editing: false }
                : task
        );
    };

    return (
        <>
            <EditTaskContainer>
                <TaskContainer editing={true}>
                    <input
                        autoFocus
                        type='text'
                        value={description}
                        onChange={(event) => handleDescriptionChange(event, id)}
                    />
                </TaskContainer>
                <EditTaskFooter>
                    <button
                        className='delete-btn'
                        onClick={() => handleDeleteTask(id)}
                    >
                        Delete
                    </button>

                    <div>
                        <button
                            className='cancel-btn'
                            onClick={() => handleCancelEditing(prevDesc)}
                        >
                            Cancel
                        </button>
                        <button
                            className='save-btn'
                            onClick={() => handleSaveTask(id, description)}
                        >
                            Save
                        </button>
                    </div>
                </EditTaskFooter>
            </EditTaskContainer>
        </>
    );
};
export default EdiTtask;
