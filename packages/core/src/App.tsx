import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';


function Post({ title, author, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>By {author.name}</h4>
      <p>{content}</p>
    </div>
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

export const App = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return data.feed.map(post => <Post key={post.id} {...post} />);
    }}
  </Query>
)
