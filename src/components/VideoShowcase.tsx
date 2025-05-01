

import { useRandomContent } from '@/hooks/useRandomContent';


interface VideoShowcaseProps {
  className?: string;
}

const VideoShowcase = ({ className = "" }: VideoShowcaseProps) => {
  const { randomVideos } = useRandomContent();

  return (
    <div className={`space-y-6 ${className}`}>
      {randomVideos.map((video, index) => (
        <div key={index} className="neon-border p-1 rounded-lg bg-space-darker">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <h3 className="mt-2 px-2 py-1 text-white font-cyber text-sm md:text-base">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoShowcase;
