import { GraphQLClient } from 'graphql-request';

// 認証なし → ヘッダー不要
export const graphqlClient = new GraphQLClient('http://localhost:8080/graphql');