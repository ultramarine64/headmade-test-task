import styles from "../../styles/Sections.module.scss";
import { marked } from "marked";

export default function ContentFlow(props) {
  return (
    <div
      dangerouslySetInnerHTML={{__html: marked.parse(props.content.ru.manual)}}
      className={styles.contentFlow}
    />
  )
}
