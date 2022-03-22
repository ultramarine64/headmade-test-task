import YoutubeContent from "./VideoSections/YoutubeContent";
import RutubeContent from "./VideoSections/RutubeContent";
import VimeoContent from "./VideoSections/VimeoContent";

export default function VideoContent(props) {

  const videoType = props.content.includes("youtube") ? "youtube" :
                    props.content.includes("vimeo")   ? "vimeo"   :
                    props.content.includes("rutube")  ? "rutube"  :
                                                        "unknown";

  return (
    <div>
      {props.heading?.title && <p>{props.heading.title.ru.manual}</p>}
      {videoType === "youtube" && <YoutubeContent content={props.content} />}
      {videoType === "vimeo"   && <VimeoContent content={props.content} />}
      {videoType === "rutube"  && <RutubeContent content={props.content} />}
      {props.heading?.description && <p>{props.heading.description.ru.manual}</p>}
    </div>
  )
}
