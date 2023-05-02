import Addtask from './components/CreateTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';
import GlobalStyle from './createGlobalStyle.styled';
import { ThemeProvider } from 'styled-components';
import ThemeSwitch from './components/Controls/ThemeSwitch';

const navyTheme = {
    body: '#0b192e',
    toggleTheme: '#333',
    white: '#fff',
    addTaskBtnOutline: '#00b5b8',
    addTaskBtnHover: '#008080',
    editTaskInputText: '#555555',
    editTaskFooter: '#EFEFEF',
    createBtn: '#008080',
    taskPlaceholder: '#bfbfbf',
    cancelBtn: '#888888',
    deleteBtn: '#D90429',
    taskCompleted: '#38b000',
};

const darkTheme = {
    body: '#18181a',
    toggleTheme: '#bfbfbf',
    white: '#fff',
    addTaskBtnOutline: '#bfbfbf',
    editTaskInputText: '#555555',
    editTaskFooter: '#EFEFEF',
    createBtn: '#18181a',
    taskPlaceholder: '#bfbfbf',
    cancelBtn: '#888888',
    deleteBtn: '#888888',
    taskCompleted: '#38b000',
};

function App() {
    const [taskList, setTaskList] = useState([]);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleSwitch = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : navyTheme}>
            <GlobalStyle />
            <ThemeSwitch toggleSwitch={toggleSwitch} />
            <TaskList taskList={taskList} setTaskList={setTaskList} />
            <Addtask setTaskList={setTaskList} />
        </ThemeProvider>
    );
}

export default App;
