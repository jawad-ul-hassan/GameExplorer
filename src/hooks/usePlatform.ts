import usePlatforms from './usePlatforms';

const usePlatform = (id: number | undefined) => {
  const { data: platforms } = usePlatforms();

  const platform = platforms?.results.find(p => p.id === id);
  return platform;
};

export default usePlatform;
