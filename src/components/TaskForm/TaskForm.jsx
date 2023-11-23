import { Form, Input } from './TaskForm.styled';
import Button from 'components/Button';

function TaskForm({ hadleSubmit }) {
  return (
    <Form onSubmit={hadleSubmit}>
      <Input type="text" name="text" palceholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
}

export default TaskForm;
