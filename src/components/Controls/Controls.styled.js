import styled from 'styled-components';

export const ControlsComponent = styled.div`
    border-radius: 4px;
    padding: 4px 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px,
        rgba(0, 0, 0, 0.1) 0px 3px 6px;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    pointer-events: auto;
    position: absolute;
    background-color: white;
    width: 210px;
    right: 0;
    z-index: 1;

    .list-control-item {
        color: rgb(79, 43, 45);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 10px 16px;
        font-size: 15px;
        cursor: pointer;
    }

    .list-control-item:hover {
        background-color: #f8f9fa;
    }

    .control-icon {
        opacity: 0.8;
        width: 15px;
        margin-right: 8px;
    }

    .item-separator {
        height: 1px;
        width: 85%;
        background-color: rgb(239, 239, 239);
        margin: auto;
    }
`;
