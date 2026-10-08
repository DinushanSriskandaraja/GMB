'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryCardProps {
  item: {
    id: string;
    title: string;
    image: string;
    location?: string;
    room?: string;
    category?: string;
    style?: string;
  };
  index: number;
  isSelected: boolean;
  isSaved: boolean;
  onSelect: () => void;
  onSave: (e: React.MouseEvent) => void;
}

const GalleryCard = ({ item, index, isSaved, onSelect, onSave }: GalleryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 ring-1 ring-slate-200/50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white !text-white group-hover:text-white text-lg font-medium tracking-tight mb-2 drop-shadow-md">{item.title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] font-bold bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-widest">
                {item.location || item.room || 'Gallery'}
              </span>
              <span className="text-[9px] font-bold bg-[#1F2E5A]/80 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-widest">
                {item.category || item.style || 'Bespoke'}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={onSave}
            className={`px-3 py-1.5 rounded-full backdrop-blur-md font-bold text-[9px] uppercase tracking-wider transition-colors shadow-sm ${isSaved
                ? 'bg-slate-100/90 text-[#1F2E5A] cursor-default'
                : 'bg-white/90 text-[#1F2E5A] hover:bg-[#1F2E5A] hover:text-white'
              }`}
          >
            Consult
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              let matchSlug = 'tranquil-blockout'; // default
              let styleQuery = '';
              const cat = (item.category || item.style || '').toLowerCase();

              if (cat.includes('sheer')) matchSlug = 'catalina-sheer';
              else if (cat.includes('curtain') || cat.includes('drape')) matchSlug = 'eclipse-blockout';
              else if (cat.includes('blind')) matchSlug = 'tranquil-blockout';

              if (cat.includes('s-fold') || cat.includes('s fold') || cat.includes('wave fold')) {
                styleQuery = '?style=S%20Fold';
              } else if (cat.includes('pinch')) {
                styleQuery = '?style=Triple%20Pinch%20Pleat';
              } else if (cat.includes('pencil') || cat.includes('pocket')) {
                styleQuery = '?style=Pencil%20Pleat';
              }

              window.location.href = `/store/${matchSlug}${styleQuery}`;
            }}
            className="px-3 py-1.5 rounded-full bg-[#3d9e41] text-white font-bold text-[9px] uppercase tracking-wider hover:bg-[#2f7a32] transition-colors shadow-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
