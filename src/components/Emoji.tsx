import meh from '../assets/meh.webp';
import bullsEye from '../assets/bulls-eye.png';
import thumbsUp from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: meh,
      alt: 'meh',
      boxSize: '25px',
    },
    4: {
      src: thumbsUp,
      alt: 'recommended',
      boxSize: '20px',
    },
    5: {
      src: bullsEye,
      alt: 'Exceptional',
      boxSize: '25px',
    },
  };

  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} marginTop={3} />;
};

export default Emoji;
