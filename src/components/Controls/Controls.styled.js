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

export const SwitchContainer = styled.div`
    .toggle-switch {
        position: absolute;
        display: inline-block;
        width: 50px;
        height: 25px;
        margin: 1.5rem;
        right: 0;
        top: 0;
    }
    .toggle-switch input[type='checkbox'] {
        display: none;
    }
    .toggle-switch .switch {
        position: absolute;
        cursor: pointer;
        background-color: #b6b6b6;
        border-radius: 25px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: background-color 0.2s ease;
    }
    .toggle-switch .switch::before {
        position: absolute;
        content: '';
        left: 2px;
        top: 2px;
        width: 21px;
        height: 21px;
        background-color: #333;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }
    .toggle-switch input[type='checkbox']:checked + .switch::before {
        transform: translateX(25px);
        background-color: ${(props) => props.theme.toggleTheme};
    }
    .toggle-switch input[type='checkbox']:checked + .switch {
        background-color: #023047;
    }
`;
