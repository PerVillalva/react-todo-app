import { HiDotsVertical } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';
import { TaskContainer } from './TaskList.styled';

const DisplayTask = ({
    description,
    id,
    taskCompleted,
    updateTaskListFunction,
}) => {
    const handleTaskCompleted = (id) => {
        updateTaskListFunction((task) => {
            return task.id === id
                ? { ...task, completed: !task.completed }
                : task;
        });
    };

    const handleEditTask = (id) => {
        updateTaskListFunction((task) => {
            return task.id === id ? { ...task, editing: true } : task;
        });
    };

    return (
        <>
            <TaskContainer editing={false} taskCompleted={taskCompleted}>
                <div className='complete-task'>
                    <button onClick={() => handleTaskCompleted(id)}>
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
