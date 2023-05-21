import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Button, TextField } from '@mui/material';


const CREATE_POST = gql`
    mutation createPost(
                    $body: String 
                    $author: String) {
        createPost(
                body: $body
                author: $author) {
            id
            author
            body
        }
    }
`;


const PostForm = ({onPostAdded} : any) => {
    
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [createPost, {error}] = useMutation(CREATE_POST);

  const addPost = () => {
    createPost({
        variables: {
            author : author,
            body : body,
        },
    }).then((response) => {
        const newPost = response.data.createPost;
        onPostAdded(newPost); // Przekazanie nowego postu do App
      })
      .catch((error) => {
        console.error('Error adding post:', error);
      });
    
  }

  return <div>
            <TextField  
                    type="text"
                    label="Author"
                    placeholder="Author"
                    onChange={(e) => setAuthor(e.target.value)}
            />
            <TextField  
                    type="text"
                    label="Body"
                    placeholder="Body"
                    onChange={(e) => setBody(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={addPost}>Create Post</Button>
         </div>;
};

export default PostForm;