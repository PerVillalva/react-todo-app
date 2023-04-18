import EditTask from './EditTask';
import { TaskListContext } from '../../utils/TaskListContext';
import DisplayTask from './DisplayTask';
import { TaskListContainer } from './TaskList.styled';

const TaskList = ({ taskList, setTaskList }) => {
    const updateTaskList = (updateFunction) => {
        const updatedTasks = taskList.map((task) => {
            return updateFunction(task);
        });
        setTaskList(updatedTasks);
    };

    return (
        <>
            <TaskListContext.Provider value={{ taskList, setTaskList }}>
                <TaskListContainer>
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
                </TaskListContainer>
            </TaskListContext.Provider>
        </>
    );
};

export default TaskList;
