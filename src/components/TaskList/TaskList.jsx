import EditTask from './EditTask';
import { TaskListContext } from '../../utils/TaskListContext';
import DisplayTask from './DisplayTask';
import {
    TaskListContainer,
    TaskListView,
    TaskListHeader,
} from './TaskList.styled';

const TaskList = ({ taskList, setTaskList }) => {
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

    return (
        <>
            <TaskListContainer>
                <TaskListHeader>
                    <h2>Tasks</h2>
                    <h2>{formattedDate}</h2>
                </TaskListHeader>
                <TaskListContext.Provider value={{ taskList, setTaskList }}>
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
