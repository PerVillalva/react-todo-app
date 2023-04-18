import EditTask from './EditTask';
import { TaskListContext } from '../../utils/TaskListContext';
import DisplayTask from './DisplayTask';
import { TaskListContainer } from './TaskList.styled';

const TaskList = ({ taskList, setTaskList }) => {
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
                                />
                            ) : (
                                <DisplayTask
                                    description={task.description}
                                    id={task.id}
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
