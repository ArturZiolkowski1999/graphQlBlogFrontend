import React from 'react';
import { Card, CardContent } from '@mui/material';

const Post = (props: { id: any; author: any; body: any; }) => {
    
    const { id, author, body } = props;
    
  return <div>
            <Card>
              <CardContent>
                  <p>{id}</p>
                  <p>{author}</p>
                  <p>{body}</p>
                </CardContent>
            </Card>
         </div>;
};

export default Post;