import React from 'react';
import styled from 'styled-components';
import Post from './components/Post';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fafafa;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-family: 'Instagram Sans Script', cursive;
  font-size: 24px;
  text-align: center;
  margin: 0;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

function App() {
  // Sample post data
  const posts = [
    {
      id: 1,
      username: 'user1',
      imageUrl: 'https://picsum.photos/600/600',
      likes: 123,
      caption: 'Beautiful sunset! 🌅',
      comments: [
        { username: 'user2', text: 'Amazing view!' },
        { username: 'user3', text: 'Where is this?' }
      ]
    },
    {
      id: 2,
      username: 'user2',
      imageUrl: 'https://picsum.photos/600/601',
      likes: 456,
      caption: 'City vibes 🏙️',
      comments: [
        { username: 'user1', text: 'Love this!' },
        { username: 'user4', text: 'Great shot!' }
      ]
    },
    {
      id: 3,
      username: 'user3',
      imageUrl: 'https://picsum.photos/600/602',
      likes: 789,
      caption: 'Nature is beautiful 🌿',
      comments: [
        { username: 'user2', text: 'So peaceful!' },
        { username: 'user5', text: 'Perfect composition!' }
      ]
    }
  ];

  return (
    <AppContainer>
      <Header>
        <Logo>Instagram Clone</Logo>
      </Header>
      <Feed>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Feed>
    </AppContainer>
  );
}

export default App; 