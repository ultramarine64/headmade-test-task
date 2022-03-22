import styles from "../../styles/Sections.module.scss";
import { Image } from "antd";
import { nanoid } from 'nanoid';
import { Row, Col } from "antd";

export default function ImageGallery(props) {
  return (
    <div>
      <Image.PreviewGroup>
        <Row gutter={[16,16]}>
          {props.content.map(image =>
            <Col xs={24} md={8} xxl={6} key={nanoid()} >
              <Image preview={{src: image.thumbnail}} src={image.original} className={styles.imagePreviewCol} />
            </Col>)}
        </Row>
      </Image.PreviewGroup>
    </div>
  )
}
