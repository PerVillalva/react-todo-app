import Addtask from './assets/components/AddTask';
import TaskList from './assets/components/TaskList';
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
                { id: uuid(), description: cDescription, editing: false },
            ];
        });
    };

    return (
        <div className='App'>
            <Addtask onAddTask={addTaskHandler} />
            <TaskList taskList={taskList} setTaskList={setTaskList} />
        </div>
    );
}

export default App;
