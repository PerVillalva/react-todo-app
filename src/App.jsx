import Addtask from './components/CreateTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {
    const [taskList, setTaskList] = useState([]);

    // Handle Form Submission (add new task)
    const addTaskHandler = (cDescription) => {
        setTaskList((prevTaskList) => {
            return [
                ...prevTaskList,
                {
                    id: uuid(),
                    description: cDescription,
                    editing: false,
                    completed: false,
                },
            ];
        });
    };

    return (
        <div className='App'>
            <Addtask onAddTask={addTaskHandler} taskList={taskList} />
            <TaskList taskList={taskList} setTaskList={setTaskList} />
        </div>
    );
}

export default App;
