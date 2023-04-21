import { useState, useRef } from 'react';
import useClickOutside from '../../utils/useClickOutside';
import EditTask from './EditTask';
import { TaskListContext } from '../../utils/TaskListContext';
import DisplayTask from './DisplayTask';
import {
    TaskListContainer,
    TaskListView,
    TaskListHeader,
} from './TaskList.styled';
import { HiOutlineMenu } from 'react-icons/hi';
import Controls from '../Controls/Controls';

const TaskList = ({ taskList, setTaskList }) => {
    const [isControlsOpen, setIsControlsOpen] = useState(false);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const formattedDate = `${day} ${month}.`;

    const updateTaskList = (updateFunction) => {
        const updatedTasks = taskList.map((task) => {
            return updateFunction(task);
        });
        setTaskList(updatedTasks);
    };

    const controlsRef = useRef();

    const handleClickOutside = () => {
        setIsControlsOpen(false);
    };

    useClickOutside(controlsRef, handleClickOutside);

    return (
        <>
            <TaskListContainer>
                <TaskListContext.Provider value={{ taskList, setTaskList }}>
                    <TaskListHeader>
                        <h2>Tasks</h2>
                        <h2>{formattedDate}</h2>
                        <div style={{ position: 'relative' }} ref={controlsRef}>
                            <button
                                onClick={() =>
                                    setIsControlsOpen(!isControlsOpen)
                                }
                            >
                                <HiOutlineMenu />
                            </button>
                            <Controls isOpen={isControlsOpen} />
                        </div>
                    </TaskListHeader>

                    <TaskListView>
                        {taskList.map((task) => (
                            <li key={task.id}>
                                {task.editing ? (
                                    <EditTask
                                        description={task.description}
                                        id={task.id}
                                        updateTaskListFunction={updateTaskList}
                                    />
                                ) : (
                                    <DisplayTask
                                        description={task.description}
                                        id={task.id}
                                        taskCompleted={task.completed}
                                        updateTaskListFunction={updateTaskList}
                                    />
                                )}
                            </li>
                        ))}
                    </TaskListView>
                </TaskListContext.Provider>
            </TaskListContainer>
        </>
    );
};

export default TaskList;
