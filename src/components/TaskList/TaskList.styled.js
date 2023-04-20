import styled from 'styled-components';

export const TaskListContainer = styled.div`
    max-width: 475px;
    margin: 75px auto 0;
`;

export const TaskListHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    padding-bottom: 14px;
    margin: 0 auto 15px;

    h2 {
        color: white;
    }
`;

export const TaskListView = styled.ul`
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0px auto 15px;
        background-color: white;
        border-radius: 6px;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

    input {
        border: none;
        color: rgb(85, 85, 85);
        font-weight: bold;
        outline: none;
        width: 100%;
        font-size: 1.2rem;
    }

    div.edit-task {
        display: flex;
        align-items: center;

        button {
            color: rgb(153, 153, 153);
            font-size: 1.75rem;
            padding: 5px 14px 0px 0px;
        }
    }
`;

export const EditTaskContainer = styled.div`
    width: 100%;
`;

export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${(props) => (props.editing ? '26px' : '15px')} 20px;
    overflow-wrap: break-word;
    width: ${(props) => (props.editing ? '100%' : '75%')};
    color: rgb(85, 85, 85);
    font-weight: bold;
    font-size: 1.2rem;

    span {
        width: 100%;
        text-decoration: ${(props) =>
            props.taskCompleted ? 'line-through' : 'none'};
        color: ${(props) =>
            props.taskCompleted ? 'rgb(187, 187, 187)' : 'inherit'};
    }

    .complete-task {
        margin-right: 10px;

        button {
            color: ${(props) =>
                props.taskCompleted ? '#38b000' : 'rgb(223, 223, 223)'};
            font-size: 1.75rem;
            padding-top: 4px;

            &:hover {
                ${(props) =>
                    props.taskCompleted ? '#38b000' : 'rgb(223, 223, 223)'};
                opacity: 0.6;
            }
        }
    }
`;

export const EditTaskFooter = styled.div`
    display: flex;
    background-color: rgb(239, 239, 239);
    width: 100%;
    padding: 14px 20px;
    justify-content: space-between;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;

    button {
        font-size: 14px;
        font-weight: bold;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }

    .delete-btn,
    .save-btn {
        color: white;
        border: solid;
        padding: 8px 12px;
        min-width: 70px;
        border-radius: 6px;
        font-weight: normal;
    }

    .delete-btn {
        background-color: #d90429;
    }

    .cancel-btn {
        color: rgb(136, 136, 136);
        margin-right: 14px;
    }

    .save-btn {
        background-color: #008080;
    }
`;

export const TaskListItem = ``;
