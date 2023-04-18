import styled from 'styled-components';

export const NewTaskContent = styled.div`
    height: 52px;

    input {
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 1.2rem;
        padding: 20px 45px;
        border: none;

        &::placeholder {
            color: #bfbfbf;
        }
    }
`;

export const AddTaskBtnContainer = styled.div`
    padding: 30px 40px;
    margin-top: 12px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 15px 0px;
        font-size: 1rem;
        font-weight: bold;
        background-color: white;
        color: #008080;
        border: dashed #008b8b;
        border-radius: 8px;
        opacity: 0.85;

        &:hover {
            background-color: #008b8b;
            color: white;
        }

        .plus-icon {
            margin-right: 6px;
            font-size: 1.3rem;
        }
    }
`;
