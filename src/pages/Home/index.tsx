import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { MainForm } from '../../MainForm';

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
