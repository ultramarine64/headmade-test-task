import date from 'date-and-time';
import Image from 'next/image';
import styles from "../styles/NewsCard.module.css";

export default function NewsCard(props) {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image src={props.newsImage} layout="fill" objectFit="cover" alt="" />
      </div>
      <span className={styles.date}>{date.format(new Date(props.date), 'DD.MM.YYYY')}</span>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </>
  )
}
