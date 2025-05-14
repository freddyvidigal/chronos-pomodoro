import './Styles/global.css';
import './Styles/theme.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolor
        rerum dignissimos, nihil quia tenetur veritatis accusantium totam
        temporibus sequi aspernatur excepturi modi quasi tempore, cupiditate
        soluta eius ut necessitatibus.
      </p>
    </>
  );
}
