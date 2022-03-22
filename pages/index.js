import Head from "next/head";
import { Button, Row, Col } from "antd";
import { useQuery } from "@apollo/client";
import newsListQuery from "../queries/newsListQuery.graphql";
import styles from "../styles/NewsListPage.module.scss";
import NewsCard from "../components/NewsCard";

function GeneratedNewsListPage(props) {
  return (
    <div>
      <Head>
        <title>Все новости</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Row gutter={{ md: 20, xl: 30 }}>
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

export default function NewsListPage() {
  const { loading, data, fetchMore } = useQuery(
    newsListQuery,
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
    <GeneratedNewsListPage newsList={data.v_news} fetchMore={fetchMoreNews} />
  )
}
