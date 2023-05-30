import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const GenreSkeleton = () => {
  return (
    <Card marginY="5px">
      <HStack>
        <Skeleton borderRadius={8} width="32px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GenreSkeleton;
