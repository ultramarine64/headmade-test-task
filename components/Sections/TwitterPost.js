import TweetEmbed from 'react-tweet-embed'

export default function TwitterPost(props) {
  return (
    <div>
      <TweetEmbed tweetId={props.content.split("/").pop()} />
    </div>
  )
}
