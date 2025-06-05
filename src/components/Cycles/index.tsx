import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.Cycles}>
      <span>Ciclos:</span>

      <div className='cyclesDots'>
        <span className='cycleDot'></span>
      </div>
    </div>
  );
}
