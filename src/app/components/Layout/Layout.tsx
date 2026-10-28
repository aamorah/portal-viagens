import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>Portal de Viagens WeFly</h1>
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="/">
            Início
          </Link>
          <Link className={styles.navLink} href="/destinos">
            Destinos
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          &copy; 2026 Portal de Viagens WeFly. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
