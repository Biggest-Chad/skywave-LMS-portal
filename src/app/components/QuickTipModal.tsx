import { useEffect, useState } from 'react';
import { X, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase } from '../../lib/supabase';

interface QuickTipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuickTip {
  id: number;
  category: string;
  tip_title: string;
  tip_text: string;
  emoji: string;
  image: string | null;
}

export function QuickTipModal({ isOpen, onClose }: QuickTipModalProps) {
  const [tip, setTip] = useState<QuickTip | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const fetchRandomTip = async () => {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('quick_tips')
        .select('*');

      if (error) {
        console.error('Error fetching tips:', error);
        setLoading(false);
        return;
      }

      if (data && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setTip(data[randomIndex]);
      }
      
      setLoading(false);
    };

    fetchRandomTip();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-card border border-primary/30 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-primary/20"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-foreground">Quick Security Tip</h2>
        </div>

        {loading ? (
          <div className="py-8 text-center text-foreground/60">Loading tip...</div>
        ) : tip ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {tip.image ? (
                <img 
                  src={tip.image} 
                  alt={tip.tip_title}
                  className="w-12 h-12 rounded-xl object-cover border border-border"
                />
              ) : (
                <span className="text-4xl">{tip.emoji}</span>
              )}
              <h3 className="text-primary">{tip.tip_title}</h3>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              {tip.tip_text}
            </p>

            <div className="pt-4 mt-4 border-t border-border">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        ) : (
          <div className="py-4 text-center text-foreground/60">
            No tips available.
          </div>
        )}
      </motion.div>
    </div>
  );
}
