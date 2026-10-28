import styles from './CardDestino.module.css';

type CardDestinoProps = {
    titulo: string;
    imagem: string;
};

function CardDestino({ titulo, imagem }: CardDestinoProps) {
   return (
    <article className={styles.cardDestino}>
      <img className={styles.cardDestinoImagem} src={imagem} alt={titulo} />
      <h2 className={styles.cardDestinoTitulo}>{titulo}</h2>
    </article>
  );
}

export default CardDestino;