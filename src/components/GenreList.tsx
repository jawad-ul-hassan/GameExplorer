import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from './hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  if (isLoading)
    return skeletons.map(skeleton => <GenreSkeleton key={skeleton} />);

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
