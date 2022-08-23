const token =
  'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg5QTM1REY2OUNGOEVDNTgyNDE4NzQ3NTQ1RDgxMDVGIiwieDV0IjoiWHE0ZUhFRFBJcUp2dVU1WXhIRVJFRVN3a3VjIiwidHlwIjoiYXQrand0IiwiY3R5IjoiSldUIn0.eyJpc3MiOiJodHRwczovL3NlcnZlci5tYWtuYWsubmV0IiwibmJmIjoxNjYxMjMzOTg1LCJpYXQiOjE2NjEyMzM5ODUsImV4cCI6MTY2MTMyMDM4NSwic2NvcGUiOlsib3BlbmlkIiwicGFuZWwiLCJtbmdpZCIsInByb2ZpbGUiLCJJZGVudGl0eVNlcnZlckFwaSJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6ImFyeS5jbGkucGFuZWwiLCJzdWIiOiIxOThkOGUzMy1lZGFhLTQyMjItODZmNC04OTJlYTdjZGM5MTEiLCJhdXRoX3RpbWUiOjE2NjEyMzM5ODMsImlkcCI6ImxvY2FsIiwiZW1wLmNvdSI6IjEiLCJlbXAubCI6IjEiLCJlbXAuZCI6IjEiLCJwci51IjoiMSIsImFpZCI6IjE5OGQ4ZTMzLWVkYWEtNDIyMi04NmY0LTg5MmVhN2NkYzkxMSIsInNpZCI6IjRBNEJFNEZGMDNEOUEzRUY2NzUwMjQyMzg5QTg5QkYyIiwianRpIjoiQTk3NjAwRDdDNzM1OEVFMzE4MEVBREUwM0U3MzM4NkMifQ.HgNZF6akfHH2UenSRXtsjoiGxnNKjXp0_Zbg_n2RoKK6QaZYN5GVIrPCpXWkPJqMg4dUcMtFAhdYfQQVTFrAPxy0DIgKK33DLq6-YDaSFxSXvZJxB7B6W1ojW0bKusO4JfG_9f6N21dK-dIE-bwdBBThDtlDVDkZAAcUCaRuGWhUSFMhQJjJUXY0m2QYhJwFWosTh1V0aHdVpjtZM-xowfXnkDa5hOm5NxXeV0BxEwsEKXPcr2xShaPBNQVYKd6C6_LAXU1wr2r7EeFvTKZyx1U3RHRUQe4ltSjYBBKFR7h40manW1n_6Ue3wkcMSGypJIZqXAVxY_rcoXcz1GkWhQ';
const express = require('express');
const expressPlayground =
  require('graphql-playground-middleware-express').default;
// const { ApolloServer, gql } = require('apollo-server-express');
// const interceptor = require('express-interceptor');

const app = express();

/***********************************Inject.Header.Method.One**************************************************************************/
// const server = new ApolloServer({
//   playground: {
//     tabs: [
//       {
//         headers: {
//           dfdfdsf: 'fdfdsfsdf',
//         },
//       },
//     ],
//   },
// });

// const typeDefs = gql`
//   type Query {
//     "A simple type for getting started!"
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };
// server.applyMiddleware({ app });
// app.use(cors({ origin: true }));

// app.get(
//   '/playground',
//   expressPlayground({
//     endpoint: `http://172.29.30.2:12313/graphql`,
//     headers: {
//       Authorization: 'Bearer ' + token,
//       hi: 'dsfdsfsdf',
//     },
//   }),
// );

/***********************************Inject.Header.Method.Two**************************************************************************/
// context.setHeaders.push({ key: 'headername', value: 'headercontent' });

// const SCRIPT_TO_INJECT = `
//   <script>
//     window.addEventListener('load', () => {
//       console.log('script injected');
//       const store = window.s;
//       setTimeout(() => {
//         const headers = '{"Authorization": "Bearer token"}';
//         store.dispatch({ type: 'EDIT_HEADERS', payload: { headers } });
//       }, 2000);
//     });
//   </script>
// `;
// const END_BODY = '\n  </body>\n  </html>';
// app.use(
//   interceptor((req, res) => ({
//     isInterceptable: () => /text\/html/.test(res.get('content-type')),
//     intercept: (body, send) => {
//       send(body.replace(END_BODY, SCRIPT_TO_INJECT + END_BODY));
//     },
//   })),
// );

// server.applyMiddleware({ app });

/***********************************Inject.Header.Method.Three**************************************************************************/

const headers = JSON.stringify({
  authorization: `${token}`,
});

app.get(
  '/playground',
  expressPlayground({
    endpoint: `http://172.29.30.2:12313/graphql?headers=${encodeURIComponent(
      headers,
    )}`,
  }),
);

app.get(
  '/graphql',
  expressPlayground({ endpoint: 'http://172.29.30.2:12313/graphql' }),
);

app.listen('3000', () => {
  console.log(`Your app is running on 3000`);
});
