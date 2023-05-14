import React, { useEffect } from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`

    query {
      getPosts{
        id
        body
        author
      }
    }

`;

function App() {
  const { error, loading, data } = useQuery(GET_POSTS);

  useEffect(() => {
    console.log(loading, error, data);
  })

  return (
    <div className="App">
      {data ? data.getPosts.map((post: any) => {
        return (
        <div>
          <p>{post.id}</p> 
          <p>{post.author}</p>
          <p>{post.body}</p>
        </div>)
      }): null }
    </div>
  );
}

export default App;
