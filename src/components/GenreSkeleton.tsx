import { Box, HStack, Text, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreSkeleton = () => {
  return (
    <Box marginY="5px" width="100%">
      <HStack>
        <Skeleton borderRadius={8} height="32px" width="32px" />
        <SkeletonText width="100%">
          <Text>Hello</Text>
        </SkeletonText>
      </HStack>
    </Box>
  );
};

export default GenreSkeleton;
