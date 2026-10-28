import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.heroImagem}
        src="/images/hero-viagem.jpg"
        alt="Destino tropical"
        width={1920}
        height={1080}
        sizes="100vw"
        priority
      />

      <div className={styles.heroConteudo}>
        <h1 className={styles.heroTitulo}>Viaje. Explore. Viva.</h1>
        <p className={styles.heroDescricao}>Descubra destinos incríveis para a sua próxima aventura.</p>
        <Link className={styles.botaoDestinos} href="/destinos">
          Explore Destinos
        </Link>
      </div>
    </section>
  );
}
