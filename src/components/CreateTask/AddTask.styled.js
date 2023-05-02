import styled from 'styled-components';

export const AddTaskContainer = styled.div`
    max-width: 475px;
    margin: 0 auto 75px;
`;

export const NewTaskContent = styled.div`
    width: 100%;
    background: ${(props) => props.theme.white};
    padding: 28px 50px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

    input {
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 1.2rem;
        border: none;

        &::placeholder {
            color: ${(props) => props.theme.taskPlaceholder};
        }
    }
`;

export const AddTaskBtnContainer = styled.div`
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 15px 0;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.1);
        color: ${(props) => props.theme.addTaskBtnOutline};
        border: dashed;
        border-radius: 6px;
        opacity: 0.85;

        &:hover {
            background-color: ${(props) => props.theme.addTaskBtnHover};
            border-color: ${(props) => props.theme.addTaskBtnHover};
            color: ${(props) => props.theme.white};
        }

        .plus-icon {
            margin-right: 6px;
            font-size: 1.75rem;
        }
    }
`;

export const AddTaskFooter = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.editTaskFooter};
    width: 100%;
    padding: 14px 20px;
    justify-content: flex-end;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;

    button {
        font-size: 14px;
        font-weight: bold;
        opacity: 0.8;
        border: none;

        &:hover {
            opacity: 1;
        }
    }

    .create-btn {
        background-color: ${(props) => props.theme.createBtn};
        color: white;
        border: solid;
        padding: 8px 12px;
        min-width: 70px;
        border-radius: 6px;
        font-weight: normal;
    }

    .cancel-btn {
        color: ${(props) => props.theme.cancelBtn};
        margin-right: 14px;
    }
`;
