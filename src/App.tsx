import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './Styles/theme.css';
import './Styles/global.css';
export function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <section>FORM</section>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
