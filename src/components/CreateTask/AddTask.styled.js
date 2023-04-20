import styled from 'styled-components';

export const AddTaskContainer = styled.div`
    max-width: 475px;
    margin: 0 auto 75px;
`;

export const NewTaskContent = styled.div`
    width: 100%;
    background: #fff;
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
            color: #bfbfbf;
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
        color: rgb(6, 113, 116);
        border: dashed rgb(6, 113, 116);
        border-radius: 6px;
        opacity: 0.85;

        &:hover {
            background-color: rgb(6, 113, 116);
            color: white;
        }

        .plus-icon {
            margin-right: 6px;
            font-size: 1.75rem;
        }
    }
`;

export const AddTaskFooter = styled.div`
    display: flex;
    background-color: rgb(239, 239, 239);
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
        background-color: #008080;
        color: white;
        border: solid;
        padding: 8px 12px;
        min-width: 70px;
        border-radius: 6px;
        font-weight: normal;
    }

    .cancel-btn {
        color: rgb(136, 136, 136);
        margin-right: 14px;
    }
`;
