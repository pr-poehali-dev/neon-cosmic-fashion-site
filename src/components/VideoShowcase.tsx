
import { useRandomContent } from '@/hooks/useRandomContent';
import { useEffect, useRef } from 'react';

interface VideoShowcaseProps {
  className?: string;
}

const VideoShowcase = ({ className = "" }: VideoShowcaseProps) => {
  const { randomVideos } = useRandomContent();
  const videoContainers = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Инициализация виджетов VK после монтирования компонента
    if (window.VK && window.VK.Widgets) {
      videoContainers.current.forEach((container, index) => {
        if (container && randomVideos[index]) {
          const video = randomVideos[index];
          try {
            // Очищаем контейнер перед добавлением нового видео
            container.innerHTML = '';
            
            // Создаем виджет видео ВКонтакте
            window.VK.Widgets.Video(
              container.id,
              {
                width: '100%',
                height: 225
              },
              `${video.ownerId}_${video.id}`
            );
          } catch (error) {
            console.error('Ошибка при загрузке видео ВКонтакте:', error);
            container.innerHTML = `<div class="p-4 text-neon-pink font-cyber text-center">Ошибка загрузки видео</div>`;
          }
        }
      });
    }
  }, [randomVideos]);

  return (
    <div className={`space-y-6 ${className}`}>
      {randomVideos.map((video, index) => (
        <div key={index} className="neon-border p-1 rounded-lg bg-space-darker">
          <div className="aspect-video rounded-lg overflow-hidden">
            <div
              id={`vk_video_${index}`}
              ref={el => (videoContainers.current[index] = el)}
              className="w-full h-full bg-space-dark flex items-center justify-center"
            >
              <div className="animate-pulse text-neon-blue font-cyber">
                Загрузка видео...
              </div>
            </div>
          </div>
          <h3 className="mt-2 px-2 py-1 text-white font-cyber text-sm md:text-base">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoShowcase;
