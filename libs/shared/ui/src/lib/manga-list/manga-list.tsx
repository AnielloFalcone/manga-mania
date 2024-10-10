import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleGrid, Box, Image, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Manga {
  id: string;
  title: string;
  coverImage: string;
}

interface MangaListProps {
  mangas: Manga[];
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const MangaList: React.FC<MangaListProps> = ({ mangas }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
      {mangas.map((manga) => (
        <StyledLink key={manga.id} to={`/manga/${manga.id}`}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'lg' }}>
            <Image src={manga.coverImage} alt={manga.title} height="64" objectFit="cover" />
            <Box p={4}>
              <Heading as="h3" size="md">
                {manga.title}
              </Heading>
            </Box>
          </Box>
        </StyledLink>
      ))}
    </SimpleGrid>
  );
};
