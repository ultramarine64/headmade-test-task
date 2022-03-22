import { Image } from "antd";
import { nanoid } from 'nanoid';
import { Row, Col } from "antd";
import styles from "../../styles/Sections.module.scss";

export default function ImageGallery(props) {
  return (
    <Image.PreviewGroup>
      <Row gutter={[16,16]}>
        {props.content.map(image =>
          <Col xs={24} md={8} xxl={6} key={nanoid()} >
            <Image preview={{src: image.thumbnail}} src={image.original} className={styles.imagePreviewCol} alt="" />
          </Col>)}
      </Row>
    </Image.PreviewGroup>
  )
}
