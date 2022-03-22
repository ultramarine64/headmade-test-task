import { useEffect, useState } from "react";
import styles from "../../../styles/Sections.module.scss";

export default function YoutubeContent(props) {
  const [embedData, setEmbedData] = useState({});

  useEffect(() => {
    fetch(`https://www.youtube.com/oembed?url=${props.content}&format=json`)
      .then(response => response.json())
      .then(data => setEmbedData(data))
  }, [props.content]);

  return (
    embedData
    ?
    <div dangerouslySetInnerHTML={{__html: embedData?.html}} className={styles.videoContent}></div>
    :
    null
  )
}
