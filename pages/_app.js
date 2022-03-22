import '../styles/globals.scss'
import { ApolloProvider } from "@apollo/client";
import { newsListClient } from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={newsListClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
