export default function RutubeContent(props) {
  return (
    /// @todo Сделать нормальную стилизацию видео
    <div style={{left: "0", width: "100%", height: "0", position: "relative", paddingBottom: "83.721%"}}>
      <iframe src={`https://rutube.ru/play/embed/${props.content.split("/").pop()}`} allowFullScreen scrolling="no" allow="encrypted-media;" style={{top: "0", left: "0", width: "100%", height: "100%", position: "absolute", border: "0"}}></iframe>
    </div>
  )
}
