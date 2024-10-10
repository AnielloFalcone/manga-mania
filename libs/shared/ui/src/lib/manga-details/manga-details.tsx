import React from 'react';
import { Box, Image, Heading, Text, Tag, Wrap, WrapItem, VStack, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface MangaDetails {
  id: string;
  title: string;
  description: string;
  author: string;
  coverImage: string;
  genres: string[];
  status: 'ongoing' | 'completed';
  chapters: number;
}

interface MangaDetailsProps {
  manga: MangaDetails;
}

const StyledBox = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const MangaDetails: React.FC<MangaDetailsProps> = ({ manga }) => {
  return (
    <StyledBox>
      <HStack spacing={8} alignItems="flex-start">
        <Box width={{ base: "100%", md: "33%" }}>
          <Image src={manga.coverImage} alt={manga.title} borderRadius="lg" />
        </Box>
        <VStack align="flex-start" spacing={4} width={{ base: "100%", md: "66%" }}>
          <Heading as="h1" size="2xl">{manga.title}</Heading>
          <Text color="gray.600">Author: {manga.author}</Text>
          <Text>{manga.description}</Text>
          <Box>
            <Heading as="h2" size="md" mb={2}>Genres:</Heading>
            <Wrap>
              {manga.genres.map((genre) => (
                <WrapItem key={genre}>
                  <Tag size="md" variant="solid" colorScheme="blue">
                    {genre}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
          <Text>
            <strong>Status:</strong> {manga.status.charAt(0).toUpperCase() + manga.status.slice(1)}
          </Text>
          <Text>
            <strong>Chapters:</strong> {manga.chapters}
          </Text>
        </VStack>
      </HStack>
    </StyledBox>
  );
};
