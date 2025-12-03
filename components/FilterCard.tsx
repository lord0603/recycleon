import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BorderTrail } from '@/components/ui/border-trail';

interface FilterCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badges: string[];
}

export function FilterCard({ icon: Icon, title, description, badges }: FilterCardProps) {
  return (
    <div className="group relative bg-[#2A3147]/40 backdrop-blur-sm border-4 border-[#444B63]/30 rounded-2xl p-8 hover:border-[#8C96B4]/50 transition-all duration-300 hover:bg-[#2A3147]/60 overflow-hidden">
      <BorderTrail
        className="bg-gradient-to-r from-[#B4BED8] via-[#8C96B4] to-[#6F7595]"
        size={150}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'linear' as const,
        }}
        style={{
          boxShadow: '0 0 60px 30px rgba(180, 190, 216, 0.8), 0 0 100px 50px rgba(140, 150, 180, 0.5)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#8C96B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <div className="relative">
        <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#6F7595] to-[#525A77] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-[#1A2436]" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#B4BED8] mb-4">
          {title}
        </h3>

        <p className="text-[#8C96B4] leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="uppercase tracking-wider text-[10px] font-mono border-[#6A708A]/40 text-[#8C96B4] hover:border-[#8C96B4] hover:bg-[#8C96B4]/10 transition-all"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
