import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { MainForm } from '../../MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
