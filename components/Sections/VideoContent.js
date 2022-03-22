import styles from "../../styles/Sections.module.scss";
import YoutubeContent from "./VideoSections/YoutubeContent";
import RutubeContent from "./VideoSections/RutubeContent";
import VimeoContent from "./VideoSections/VimeoContent";

export default function VideoContent(props) {
  const videoType = props.content.includes("youtube") ? "youtube" :
                    props.content.includes("vimeo")   ? "vimeo"   :
                    props.content.includes("rutube")  ? "rutube"  :
                                                        "unknown";

  return (
    <div className={styles.videoContentContainer}>
      {props.heading?.title && <h3>{props.heading.title.ru.manual}</h3>}
      {videoType === "youtube" && <YoutubeContent content={props.content} />}
      {videoType === "vimeo"   && <VimeoContent content={props.content} />}
      {videoType === "rutube"  && <RutubeContent content={props.content} />}
      {props.heading?.description && <span>{props.heading.description.ru.manual}</span>}
    </div>
  )
}
