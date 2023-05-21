import React, { useEffect, useState } from 'react';
import './App.css';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import Post from './components/post';
import PostForm from './components/postForm';

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
  const [getPosts, { error, loading, data }] = useLazyQuery(GET_POSTS);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    if (data) {
      setPosts(data.getPosts);
    }

  }, [data]);

  const handlePostAdded = (newPost: never) => {
    setPosts((prevPosts: never[]) => [...prevPosts, newPost]); // Dodanie nowego postu do danych
    console.log("pobieram")
  };

  return (
    <div className="App">
      <PostForm onPostAdded={handlePostAdded}/>
      {data ? data.getPosts.map((post: any) => {
        return (
          <Post id={post.id} author={post.author} body={post.body}/>
        )
      }): null }
    </div>
  );
}

export default App;
