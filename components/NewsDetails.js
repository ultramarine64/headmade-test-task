import Image from "next/image";
import { Breadcrumb } from "antd";
import styles from "../styles/NewsDetails.module.scss";
import ContentFlow from "./Sections/ContentFlow";
import ImageGallery from "./Sections/ImageGallery";
import TwitterPost from "./Sections/TwitterPost";
import VideoContent from "./Sections/VideoContent";
import AccordionContent from "./Sections/AccordionContent";

export default function NewsPage(props) {
  return (
    <>
      <div className={styles.breadcrumbsWithNewsImage}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="/" className={styles.breadcrumbs}>Главная</Breadcrumb.Item>
          <Breadcrumb.Item className={styles.breadcrumbs}>{props.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.imageContainer}>
          <Image src={props.newsImage} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <h1 className={styles.title}>
          {props.title}
      </h1>
      <div className={styles.sections}>
        {props.sections.map(section => {
          switch(section.component) {
            case "content-flow" :
              return <ContentFlow content={section.heading.description || section.heading.title} />
            case "image-gallery" :
              return <ImageGallery content={section.images} />
            case "twitter-post" :
              return <TwitterPost content={section.twitter.url} />
            case "video" :
              return <VideoContent content={section.video.url} heading={section.heading} />
            case "accordion" :
              return <AccordionContent content={section.items} />
            /// @todo Реализовать встраивание facebook постов
            case "facebook-post" :
                return null
            default:
              return null
          }
        })}
      </div>
    </>
  )
}
