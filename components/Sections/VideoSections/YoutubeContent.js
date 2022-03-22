import { useEffect, useState } from 'react';

/// @todo Сделать нормальную стилизацию видео
export default function YoutubeContent(props) {
  const [embedData, setEmbedData] = useState({});

  useEffect(() => {
    fetch(`https://www.youtube.com/oembed?url=${props.content}&format=json`)
      .then(response => response.json())
      .then(data => setEmbedData(data))
  }, []);

  return (
    embedData
    ?
    <div dangerouslySetInnerHTML={{__html: embedData?.html}}></div>
    :
    null
  )
}
