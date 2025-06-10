import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='http://' target='_blank' rel='noopener noreferrer'>
        Entenda como funciona a técnica pomodoro
      </a>
      <a href='http://' target='_blank' rel='noopener noreferrer'>
        Chronos Pomodoro &copy;{new Date().getFullYear()} -feito com amor
      </a>
    </footer>
  );
}
