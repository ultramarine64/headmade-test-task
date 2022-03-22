import TweetEmbed from "react-tweet-embed";

export default function TwitterPost(props) {
  return (
    <TweetEmbed tweetId={props.content.split("/").pop()} />
  )
}
