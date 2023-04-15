import EditTask from './EditTask';
import { TaskListContext } from '../../utils/TaskListContext';
import { HiXCircle, HiDotsCircleHorizontal } from 'react-icons/hi';

const TaskList = ({ taskList, setTaskList }) => {
    const handleEditTask = (id) => {
        const updatedTasks = taskList.map((task) => {
            return task.id === id ? { ...task, editing: true } : task;
        });
        setTaskList(updatedTasks);
    };

    const handleDeleteTask = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    };

    return (
        <>
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
        </>
    );
};

export default TaskList;
