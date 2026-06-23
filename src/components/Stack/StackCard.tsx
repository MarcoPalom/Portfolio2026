import type { StackItem } from '../../constants/ecosystem';
import StackIconMapper from './StackIconMapper';

interface StackCardProps {
  item: StackItem;
}

export default function StackCard({ item }: StackCardProps) {
  return (
    <div 
      className={`group relative border border-white/10 bg-black/20 rounded-2xl p-3 md:p-4 flex flex-col justify-between transition-all duration-300 ease-out select-none h-full ${item.hoverBorder}`}
    >
      {/* Background Glow Orb */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl rounded-full scale-75 ${item.glowBg}`} 
        style={{ margin: '15%' }} 
      />

      {/* Spec Number Header */}
      <div className="flex justify-between items-start z-10">
        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
            {item.spec}
          </span>
          <span className="text-[9px] font-mono text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-wider">
            {item.category}
          </span>
        </div>
        {/* Logo-style ID Badge */}
        <div className="w-6 h-6 border border-white/20 group-hover:border-white bg-transparent rounded-none flex items-center justify-center transition-all duration-300 select-none">
          <span className="font-sans font-black text-[10px] text-white/40 group-hover:text-white tracking-tighter transition-colors duration-300">
            {item.id}
          </span>
        </div>
      </div>

      {/* Illustration Graphic Area */}
      <div className="w-full flex items-center justify-center py-2 my-1 z-10">
        <div className="w-16 h-16 md:w-18 md:h-18 relative flex items-center justify-center">
          <div className={`w-full h-full ${item.accentColor} opacity-40 group-hover:opacity-100 transition-all duration-300`}>
            <StackIconMapper id={item.id} />
          </div>
          {/* Hover decorative bounding box */}
          <div className={`absolute inset-0 border border-dashed ${item.accentColor}/20 pointer-events-none rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500`} />
        </div>
      </div>

      {/* Text Specs */}
      <div className="border-t border-white/10 pt-2 z-10">
        <h3 className="font-sans font-bold text-xs md:text-sm uppercase tracking-wider text-white transition-colors duration-300">
          <span className={`group-hover:${item.accentColor} transition-colors duration-300`}>
            {item.name}
          </span>
        </h3>
        <p className="font-mono text-[9px] leading-relaxed text-white/40 group-hover:text-white/65 transition-colors duration-300 mt-1 h-10 overflow-hidden text-ellipsis">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
