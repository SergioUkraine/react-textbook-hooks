import AppBar from './AppBar';
import Layout from './Layout';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { nanoid } from 'nanoid';
import { tasksInitialState } from '../data/DefaultTasksList';
import { useEffect, useState } from 'react';

const statusFilter = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
};

export const App = () => {
  const [tasksList, setTasksList] = useState(tasksInitialState);
  const [visibleTasks, setVisibleTasks] = useState(tasksList);
  const [filter, setFilter] = useState(statusFilter.all);

  const handleFilterChange = e => {
    const newFilter = e.target.name;
    if (newFilter !== filter) setFilter(newFilter);
  };

  useEffect(() => {
    switch (filter) {
      case 'Completed':
        setVisibleTasks(tasksList.filter(task => task.completed === true));
        break;
      case 'Active':
        setVisibleTasks(tasksList.filter(task => task.completed === false));
        break;
      default:
        setVisibleTasks(tasksList);
    }
  }, [tasksList, filter]);

  const toggleCheckStatus = id => {
    setTasksList(prevTasksList =>
      prevTasksList.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = id => {
    setTasksList(prevTasksList => prevTasksList.filter(item => item.id !== id));
  };

  const addTask = e => {
    e.preventDefault();
    const newTask = { id: nanoid(), text: e.target[0].value, completed: false };
    setTasksList(prevTasksList => [...prevTasksList, newTask]);
    e.target.reset();
  };

  return (
    <Layout>
      <AppBar onFilterChange={handleFilterChange} filter={filter} />
      <TaskForm hadleSubmit={addTask} />
      <TaskList
        tasks={visibleTasks}
        handleDelete={deleteTask}
        handleCheckBoxChange={toggleCheckStatus}
      />
    </Layout>
  );
};
