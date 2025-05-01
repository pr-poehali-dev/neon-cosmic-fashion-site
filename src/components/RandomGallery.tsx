
import { useRandomContent } from '@/hooks/useRandomContent';

interface RandomGalleryProps {
  className?: string;
}

const RandomGallery = ({ className = "" }: RandomGalleryProps) => {
  const { randomImages } = useRandomContent();

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {randomImages.map((image, index) => (
        <div 
          key={index} 
          className={`overflow-hidden rounded-lg relative group 
            ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''} 
            ${index % 7 === 0 ? 'row-span-2' : ''}`}
        >
          <img 
            src={`${image.url}?w=600&h=${index % 5 === 0 ? '800' : '400'}&fit=crop&q=80`} 
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="text-white p-4 font-cyber text-sm">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomGallery;
