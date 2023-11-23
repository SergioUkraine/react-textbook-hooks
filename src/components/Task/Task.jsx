import { Wrapper, CheckBox, Text, Button } from './Task.styled';
import { MdClose } from 'react-icons/md';

function Task({ task, handleDelete, handleCheckBoxChange }) {
  return (
    <Wrapper>
      <CheckBox
        type="checkbox"
        checked={task.completed}
        onChange={() => handleCheckBoxChange(task.id)}
      />
      <Text>{task.text}</Text>
      <Button onClick={() => handleDelete(task.id)}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
}

export default Task;
