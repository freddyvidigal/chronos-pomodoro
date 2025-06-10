import styles from './styles.module.css';

type FooterProps = {
  children: React.ReactNode;
};

export function Footer({ children }: FooterProps) {
  return <h1 className={styles.footer}>{children}</h1>;
}
