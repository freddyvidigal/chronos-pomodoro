import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../components/Cycles';
import { DefaultButton } from '../components/DefaultButton';
import { DefaultInput } from '../components/DefaultInput';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25 minutos</p>
      </div>
      <div className='formRow'>
        <Cycles />
        <p>0 0 0 0 0 0 0</p>
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
