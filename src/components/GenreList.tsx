import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import useGenres, { Genre } from './hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  if (error) return null;

  if (isLoading)
    return (
      <>
        {skeletons.map(skeleton => (
          <GenreSkeleton key={skeleton} />
        ))}
      </>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingBottom="12px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="md"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
