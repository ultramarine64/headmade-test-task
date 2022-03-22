import { Collapse } from 'antd';
import { nanoid } from 'nanoid';
import styles from "../../styles/Sections.module.css";

const { Panel } = Collapse;

export default function AccordionContent(props) {
  return (
    <Collapse accordion className={styles.accordion}>
      {props.content.map(data => {
        return (
          <Panel key={nanoid()} header={data.title.ru.manual}>
            <p>{data.content.ru.manual}</p>
          </Panel>
        )
      })}
    </Collapse>
  )
}
