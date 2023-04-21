import { TaskListContext } from '../../utils/TaskListContext';
import { useContext } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { HiOutlineArchiveBoxXMark } from 'react-icons/hi2';

const TaskListFilters = () => {
    const { taskList, setTaskList } = useContext(TaskListContext);

    const handleClearCompletedTasks = () => {
        const filteredTaskList = taskList.filter((task) => !task.completed);
        setTaskList(filteredTaskList);
    };

    const handleClearAllTasks = () => {
        setTaskList([]);
    };

    return (
        <>
            <div
                onClick={() => handleClearCompletedTasks()}
                className='list-control-item'
            >
                <span className='control-icon'>
                    <HiOutlineArchiveBoxXMark />
                </span>
                Clear Completed Tasks
            </div>
            <div className='item-separator' />
            <div
                onClick={() => handleClearAllTasks()}
                className='list-control-item'
            >
                <span className='control-icon'>
                    <HiOutlineTrash className='control-icon' />
                </span>
                Clear All Tasks
            </div>
        </>
    );
};

export default TaskListFilters;
