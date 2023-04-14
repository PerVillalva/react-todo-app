import { useContext, useState } from 'react';
import { TaskListContext } from '../../utils/TaskListContext';

const EdiTtask = ({ description, id }) => {
    const { taskList, setTaskList } = useContext(TaskListContext);
    const [currentDesc] = useState(description);

    // Function to update the taskList based on updateFunction
    const updateTaskList = (updateFunction) => {
        const updatedTasks = taskList.map((task) => {
            return updateFunction(task);
        });
        setTaskList(updatedTasks);
    };

    const handleCancelEditing = (prevDescription) => {
        // If the task is being edited, return description to previous one and disable editing mode
        updateTaskList((task) =>
            task.editing === true
                ? { ...task, description: prevDescription, editing: false }
                : task
        );
    };

    const handleDescriptionChange = (event, id) => {
        // Update description to reflect live changes in the task with given id
        updateTaskList((task) =>
            task.id === id ? { ...task, description: event.target.value } : task
        );
    };

    const handleSaveTask = (id, newDescription) => {
        // Save updated description of the task with given id and disable editing mode
        updateTaskList((task) =>
            task.id === id
                ? { ...task, description: newDescription, editing: false }
                : task
        );
    };

    return (
        <>
            <input
                type='text'
                value={description}
                onChange={(event) => handleDescriptionChange(event, id)}
            />
            <button onClick={() => handleCancelEditing(currentDesc)}>
                Cancel
            </button>
            <button onClick={() => handleSaveTask(id, description)}>
                Save
            </button>
        </>
    );
};
export default EdiTtask;
