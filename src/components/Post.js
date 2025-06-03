import React, { useState } from 'react';
import styled from 'styled-components';

const PostContainer = styled.article`
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #dbdbdb;
  margin-right: 12px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PostActions = styled.div`
  padding: 8px 16px;
  display: flex;
  gap: 16px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 24px;
  color: #262626;
  
  &:hover {
    color: #8e8e8e;
  }
`;

const Likes = styled.div`
  padding: 0 16px;
  font-weight: 600;
  font-size: 14px;
`;

const Caption = styled.div`
  padding: 0 16px;
  margin: 8px 0;
  font-size: 14px;
`;

const Comments = styled.div`
  padding: 0 16px;
  margin-bottom: 8px;
`;

const Comment = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
`;

const CommentUsername = styled.span`
  font-weight: 600;
  margin-right: 8px;
`;

const Timestamp = styled.div`
  padding: 0 16px 16px;
  color: #8e8e8e;
  font-size: 10px;
  text-transform: uppercase;
`;

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <PostContainer>
      <PostHeader>
        <UserAvatar />
        <Username>{post.username}</Username>
      </PostHeader>
      
      <PostImage src={post.imageUrl} alt={`Post by ${post.username}`} />
      
      <PostActions>
        <ActionButton onClick={handleLike}>
          {liked ? '❤️' : '🤍'}
        </ActionButton>
        <ActionButton>💬</ActionButton>
        <ActionButton>📤</ActionButton>
      </PostActions>
      
      <Likes>{likes} likes</Likes>
      
      <Caption>
        <CommentUsername>{post.username}</CommentUsername>
        {post.caption}
      </Caption>
      
      <Comments>
        {post.comments.map((comment, index) => (
          <Comment key={index}>
            <CommentUsername>{comment.username}</CommentUsername>
            {comment.text}
          </Comment>
        ))}
      </Comments>
      
      <Timestamp>2 HOURS AGO</Timestamp>
    </PostContainer>
  );
}

export default Post; 