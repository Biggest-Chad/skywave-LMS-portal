import { motion } from 'motion/react';

interface SecurityCardProps {
  title: string;
  subtitle: string;
  image: string;
  category: 'game' | 'resource' | 'policy';
}

export function SecurityCard({ title, subtitle, image, category }: SecurityCardProps) {
  const categoryColors = {
    game: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
    resource: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    policy: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-80 aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer border bg-gradient-to-br ${categoryColors[category]} backdrop-blur-sm flex-shrink-0`}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-5">
        <h3 className="text-foreground mb-1">{title}</h3>
        <p className="text-sm text-foreground/70">{subtitle}</p>

        <div className="absolute top-4 right-4">
          <div className={`w-2 h-2 rounded-full ${
            category === 'game' ? 'bg-cyan-400' :
            category === 'resource' ? 'bg-purple-400' :
            'bg-green-400'
          } animate-pulse`} />
        </div>
      </div>
    </motion.div>
  );
}
