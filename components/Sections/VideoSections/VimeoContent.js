import { useEffect, useState } from "react";
import styles from "../../../styles/Sections.module.scss";

export default function VimeoContent(props) {
  const [embedData, setEmbedData] = useState({});

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=${props.content}`)
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
