import { marked } from "marked";
import styles from "../../styles/Sections.module.scss";

export default function ContentFlow(props) {
  return (
    <div
      dangerouslySetInnerHTML={{__html: marked.parse(props.content.ru.manual)}}
      className={styles.contentFlow}
    />
  )
}
