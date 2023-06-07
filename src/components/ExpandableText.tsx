import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  const summary = expanded ? children : children.substring(0, limit) + '...';

  if (children.length < 300) {
    return <Text>{children}</Text>;
  }

  return (
    <Text>
      {summary}
      <Button
        size="sm"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
        marginLeft="1"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
