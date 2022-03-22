import Head from "next/head";
import { newsPageClient } from "../../../apollo-client";
import newsList from '../../../queries/newsData.graphql';
import idsQuery from "../../../queries/idsList.graphql";
import styles from "../../../styles/NewsHome.module.css"
import NewsPage from "../../../components/NewsPage";

export default function GeneratedNewsPage(props) {
  return (
      <div>
        <Head>
          <title>{props.newsList[0].heading.title.ru.manual}</title>
        </Head>
        <main>
          <div className={styles.container}>
            <NewsPage newsImage={props.newsList[0].picture[0].src}
                      title={props.newsList[0].heading.title.ru.manual}
                      sections={props.newsList[0].sections}
            />
          </div>
        </main>
      </div>
  );
}

export async function getStaticProps(context) {
  const { data } = await newsPageClient.query({
    query: newsList,
    variables: {
      id: context.params.id
    },
  });

  return (
    {
      props: {
        newsList: data.v_news
      }
    }
  )
}

export async function getStaticPaths() {
  const { data } = await newsPageClient.query({
    query: idsQuery,
  });

  const idsList = data.v_news.map(idObject => idObject.id);
  const paths = idsList.map(idFromList => ( { params: { id: idFromList.toString() }} ));

  return {
    paths,
    fallback: false,
  }
}
