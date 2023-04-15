import EditTask from './EditTask';
import { TaskListContext } from '../../utils/TaskListContext';
import { HiXCircle, HiDotsCircleHorizontal } from 'react-icons/hi';

const TaskList = ({ taskList, setTaskList }) => {
    /* Function called when the user clicks the "Edit" button next to a task.
       It updates the taskList state to mark the task with the given id as "editing". */
    const handleEditTask = (id) => {
        const updatedTasks = taskList.map((task) => {
            return task.id === id ? { ...task, editing: true } : task;
        });
        setTaskList(updatedTasks);
    };

    /* Function called when the user clicks the "Delete" button next to a task.
       It removes the task with the given id from the taskList state. */
    const handleDeleteTask = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    };

    /* Component to display the list of tasks, either in their normal state or while editing.
       It uses the TaskListContext.Provider to provide the taskList and setTaskList functions to
       child components, so they can modify the list of tasks. */
    return (
        <div>
            <TaskListContext.Provider value={{ taskList, setTaskList }}>
                <ul className='tasks-list'>
                    {taskList.map((task) => (
                        <li key={task.id}>
                            {task.editing ? (
                                <EditTask
                                    description={task.description}
                                    id={task.id}
                                />
                            ) : (
                                <>
                                    <span className='task-text'>
                                        {task.description}
                                    </span>
                                    <div className='btn-container'>
                                        <button
                                            className='edit-btn'
                                            onClick={() =>
                                                handleEditTask(task.id)
                                            }
                                        >
                                            <HiDotsCircleHorizontal />
                                        </button>
                                        <button
                                            className='delete-btn'
                                            onClick={() =>
                                                handleDeleteTask(task.id)
                                            }
                                        >
                                            <HiXCircle />
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </TaskListContext.Provider>
        </div>
    );
};

export default TaskList;
