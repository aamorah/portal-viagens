import CardDestino from "../components/CardDestino/CardDestino";
import styles from "./page.module.css";
import Link from "next/link";

function Destinos() {
  return (
    <section>
      <div className={styles.introducao}>
        <h1 className={styles.titulo}>Destinos</h1>
        <p className={styles.descricao}>
          Descubra lugares incríveis, viva novas experiências e encontre o
          destino perfeito para sua próxima aventura.
        </p>

        <Link className={styles.botaoDestinos} href="#destinos">
          É isso que eu quero!
        </Link>
      </div>

      <div id="destinos" className={styles.listaDestinos}>
        <CardDestino titulo="Grécia" imagem="/images/grecia.jpeg" />
        <CardDestino titulo="Indonésia" imagem="/images/indonesia.jpeg" />
        <CardDestino titulo="Itália" imagem="/images/italia.jpeg" />
        <CardDestino titulo="Suiça" imagem="/images/suica.jpeg" />
      </div>
    </section>
  );
}

export default Destinos;
