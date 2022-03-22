import Image from "next/image";
import Link from "next/link";
import date from "date-and-time";
import styles from "../styles/NewsCard.module.scss";

export default function NewsCard(props) {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image src={props.newsImage} layout="fill" objectFit="cover" alt="" />
      </div>
      <span className={styles.date}>{date.format(new Date(props.date), 'DD.MM.YYYY')}</span>
      <h2 className={styles.title}>
        <Link href="/news/[id]" as={`/news/${props.newsId}`}>
          {props.title}
        </Link>
      </h2>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </>
  )
}
