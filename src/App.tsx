import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './Styles/theme.css';
import './Styles/global.css';
import { Menu } from './components/Menu';
export function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>
      <Container>
        <Heading>
          <Menu />
        </Heading>
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
