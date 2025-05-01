
import { useState, useEffect } from 'react';
import { modelImages, youtubeVideos, getRandomItems, ModelImage, YoutubeVideo } from '@/utils/data';

export const useRandomContent = () => {
  const [randomImages, setRandomImages] = useState<ModelImage[]>([]);
  const [randomVideos, setRandomVideos] = useState<YoutubeVideo[]>([]);
  
  useEffect(() => {
    setRandomImages(getRandomItems(modelImages, 8));
    setRandomVideos(getRandomItems(youtubeVideos, 3));
  }, []);
  
  return { randomImages, randomVideos };
};
