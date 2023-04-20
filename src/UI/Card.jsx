import { AddTaskCard, AddTaskContainer } from './Card.styled';

const Card = (props) => {
    return (
        <AddTaskContainer>
            <AddTaskCard>{props.children}</AddTaskCard>
        </AddTaskContainer>
    );
};

export default Card;
