
import { useState, useEffect } from 'react';
import { images, youtubeVideos } from '@/utils/data';

export const useRandomContent = () => {
  const [randomImages, setRandomImages] = useState(images);
  const [randomVideos, setRandomVideos] = useState(youtubeVideos);

  useEffect(() => {
    // Перемешиваем массивы при монтировании компонента
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setRandomImages(shuffleArray(images).slice(0, 4));
    setRandomVideos(shuffleArray(youtubeVideos).slice(0, 3));
  }, []);

  return { randomImages, randomVideos };
};
