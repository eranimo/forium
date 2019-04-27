import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Grommet, Button, Box } from 'grommet';

function Post({ title, author, content }) {
  return (
    <Box
      border={{ color: 'dark' }}
      background="light-2"
    >
      <h2>{title}</h2>
      <h4>By {author.name}</h4>
      <p>{content}</p>
    </Box>
  )
}

const GET_POSTS = gql`
  query {
    feed {
      id
      title
      author {
        id,
        name
      }
      content
    }
  }
`

export const Posts = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return data.feed.map(post => <Post key={post.id} {...post} />);
    }}
  </Query>
)

const theme = {
  global: {
    colors: {
      brand: '#36A4DB'
    }
  }
}

export const App = () => (
  <Grommet theme={theme}>
    <Posts />
  </Grommet>
)
