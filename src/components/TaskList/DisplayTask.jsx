import { useContext } from 'react';
import { TaskListContext } from '../../utils/TaskListContext';
import { HiDotsVertical } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';
import { TaskContainer } from './TaskList.styled';

const DisplayTask = ({ description, id }) => {
    const { taskList, setTaskList } = useContext(TaskListContext);

    const handleEditTask = (id) => {
        const updatedTasks = taskList.map((task) => {
            return task.id === id ? { ...task, editing: true } : task;
        });
        setTaskList(updatedTasks);
    };

    return (
        <>
            <TaskContainer editing={false}>
                <div className='complete-task'>
                    <button>
                        <FaCheckCircle />
                    </button>
                </div>
                <span>{description}</span>
            </TaskContainer>
            <div className='edit-task'>
                <button onClick={() => handleEditTask(id)}>
                    <HiDotsVertical />
                </button>
            </div>
        </>
    );
};

export default DisplayTask;
