import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: 'https://gql-test.fscch.ru/v1/graphql',
  headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "pass-fscch-gql-test"
  }
});

const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          v_news: {
            keyArgs: [],
            merge(existing, incoming, { args: { offset = 0 }}) {
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[offset + i] = incoming[i];
              }
              return merged;
            },
          },
        },
      },
    },
  });

const newsListClient = new ApolloClient({
  link: link,
  cache: cache,
})

const newsPageClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export { newsListClient, newsPageClient }
