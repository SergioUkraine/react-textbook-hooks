import { Wrapper, Section, Title } from './AppBar.styled';
import TaskCounter from 'components/TaskCounter';
import StatusFilter from 'components/StatusFilter';

function AppBar({ ...otherProps }) {
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter {...otherProps} />
      </Section>
    </Wrapper>
  );
}

export default AppBar;
