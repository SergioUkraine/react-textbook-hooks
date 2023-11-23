import { Wrapper } from './StatusFilter.styled';
import Button from 'components/Button';

function StatusFilter({ onFilterChange, filter }) {
  const statusFilter = {
    all: 'All',
    active: 'Active',
    completed: 'Completed',
  };

  return (
    <Wrapper>
      <Button
        name={statusFilter.all}
        onClick={onFilterChange}
        selected={statusFilter.all === filter}
      >
        {statusFilter.all}
      </Button>
      <Button
        name={statusFilter.active}
        onClick={onFilterChange}
        selected={statusFilter.active === filter}
      >
        {statusFilter.active}
      </Button>
      <Button
        name={statusFilter.completed}
        onClick={onFilterChange}
        selected={statusFilter.completed === filter}
      >
        {statusFilter.completed}
      </Button>
    </Wrapper>
  );
}

export default StatusFilter;
