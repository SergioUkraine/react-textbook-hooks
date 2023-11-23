import { List, ListItem } from './TaskList.styled';
import Task from 'components/Task';

function TaskList({ tasks, ...otherProps }) {
  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} {...otherProps} />
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
