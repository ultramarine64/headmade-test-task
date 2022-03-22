import Head from "next/head";
import { newsPageClient } from "../../../apollo-client";
import newsQuery from "../../../queries/newsQuery.graphql";
import idsListQuery from "../../../queries/idsListQuery.graphql";
import styles from "../../../styles/NewsDetailedPage.module.scss";
import NewsDetails from "../../../components/NewsDetails";

export default function NewsDetailedPage({ newsData }) {
  return (
    <>
      <Head>
        <title>{newsData.heading.title.ru.manual}</title>
      </Head>
      <main>
        <div className={styles.container}>
          <NewsDetails newsImage={newsData.picture[0].src}
                       title={newsData.heading.title.ru.manual}
                       sections={newsData.sections}
          />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await newsPageClient.query({
    query: newsQuery,
    variables: {
      id: context.params.id
    },
  });

  return (
    {
      props: {
        newsData: data.v_news[0]
      }
    }
  )
}

export async function getStaticPaths() {
  const { data } = await newsPageClient.query({
    query: idsListQuery,
  });

  const idsList = data.v_news.map(idObject => idObject.id);
  const paths = idsList.map(idFromList => ( { params: { id: idFromList.toString() }} ));

  return {
    paths,
    fallback: false,
  }
}
