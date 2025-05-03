
import { useRandomContent } from '@/hooks/useRandomContent';

interface VideoShowcaseProps {
  className?: string;
}

const VideoShowcase = ({ className = "" }: VideoShowcaseProps) => {
  const { randomVideos } = useRandomContent();

  return (
    <div className={`space-y-6 ${className}`}>
      {randomVideos.map((video, index) => (
        <div key={index} className="neon-border p-1 rounded-lg bg-black/30">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://vk.com/video_ext.php?oid=${video.ownerId}&id=${video.id}&hd=2&autoplay=0`}
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <h3 className="mt-2 px-2 py-1 text-white text-sm md:text-base">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoShowcase;
