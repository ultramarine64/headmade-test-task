import styles from "../../../styles/Sections.module.scss";

export default function RutubeContent(props) {
  return (
    <div className={styles.videoContent}>
      <iframe src={`https://rutube.ru/play/embed/${props.content.split("/").pop()}`}
              allowFullScreen
              scrolling="no"
              allow="encrypted-media;"
      />
    </div>
  )
}
