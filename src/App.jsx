import Addtask from './components/CreateTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';

function App() {
    const [taskList, setTaskList] = useState([]);

    return (
        <>
            <TaskList taskList={taskList} setTaskList={setTaskList} />
            <Addtask setTaskList={setTaskList} />
        </>
    );
}

export default App;
