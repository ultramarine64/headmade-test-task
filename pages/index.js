import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery } from "@apollo/client";
import newsListData from '../queries/newsListData.graphql';
import { Button, Row, Col } from "antd";
import NewsCard from "../components/NewsCard"

function GeneratedNewsPage(props) {
  return (
      <div>
        <Head>
          <title>Все новости</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.container}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {props.newsList.map((news) => (
                <Col xs={24} md={8} key={news.id} >
                  <NewsCard newsImage={news.picture[0].src}
                            newsId={news.id}
                            date={news.created_at}
                            title={news.heading.title.ru.manual}
                            subtitle={news.heading.subtitle.ru.manual}
                  />
                </Col>
              ))}
            </Row>
            <Button type="primary" onClick={props.fetchMore} className={styles.button}>Показать ещё</Button>
          </div>
        </main>
      </div>
  );
}

export default function NewsPage() {
  const { loading, data, fetchMore } = useQuery(
    newsListData,
    {
      variables: {
        offset: 0,
        limit: 6
      },
    }
  );

  const fetchMoreNews = () => {
    fetchMore({
      variables: {
        offset: data.v_news.length
      },
    });
  }

  if (loading) {
    return null;
  }
  return (
    <GeneratedNewsPage newsList={data.v_news} fetchMore={fetchMoreNews} />
  )
}
