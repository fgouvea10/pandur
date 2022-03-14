import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            cateogries {
              name
              slug
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI!, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostsDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        cateogries {
          name
          slug
        }
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI!, query, { slug });

  return result.post;
};
