import { useEffect, useState } from "react";

/// @todo Сделать нормальную стилизацию видео
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
    <div dangerouslySetInnerHTML={{__html: embedData?.html}}></div>
    :
    null
  )
}
