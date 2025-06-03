import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './Styles/theme.css';
import './Styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='meuInput'>task</label>
            <input id='meuInput' type='text' />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit ame</p>
          </div>
          <div className='formRow'>
            <p>ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button>enviar</button>
          </div>
        </form>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
