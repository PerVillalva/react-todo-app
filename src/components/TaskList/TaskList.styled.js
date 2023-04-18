import styled from 'styled-components';

export const TaskListContainer = styled.ul`
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 400px;
        margin: 0px auto 15px;
        background-color: white;
        border-radius: 7px;
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
    padding: 26px 20px;
    overflow-wrap: break-word;
    width: ${(props) => (props.editing ? '100%' : '75%')};
    color: rgb(85, 85, 85);
    font-weight: bold;
    font-size: 1.2rem;

    span {
        width: 100%;
    }

    .complete-task {
        margin-right: 10px;

        button {
            color: rgb(223, 223, 223);
            font-size: 1.75rem;
            padding-top: 4px;

            &:hover {
                color: #38b000;
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
