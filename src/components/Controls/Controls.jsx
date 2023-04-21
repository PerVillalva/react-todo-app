import { ControlsComponent } from './Controls.styled';
import TaskListFilters from './TaskListFilters';

const Controls = ({ isOpen }) => {
    return (
        <ControlsComponent isOpen={isOpen}>
            <TaskListFilters />
        </ControlsComponent>
    );
};

export default Controls;
