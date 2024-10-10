import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';

// Importa i componenti delle pagine (da creare)
// import { HomePage } from './pages/home-page';
// import { MangaDetailsPage } from './pages/manga-details-page';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function App() {
  return (
    <ChakraProvider>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/manga/:id" element={<div>Manga Details Page</div>} />
          </Routes>
        </Router>
      </AppContainer>
    </ChakraProvider>
  );
}

export default App;
