import { AddTaskCard } from './Card.styled';

const Card = (props) => {
    return <AddTaskCard>{props.children}</AddTaskCard>;
};

export default Card;
