import { X, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

interface QuickTipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const securityTips = [
  {
    title: "Enable Two-Factor Authentication",
    tip: "Add an extra layer of security by enabling 2FA on all your important accounts. Use authenticator apps instead of SMS when possible.",
    icon: "🔐"
  },
  {
    title: "Use Strong Passwords",
    tip: "Create passwords with at least 12 characters, mixing uppercase, lowercase, numbers, and symbols. Never reuse passwords across accounts.",
    icon: "🔑"
  },
  {
    title: "Verify Links Before Clicking",
    tip: "Hover over links to see the actual URL before clicking. Be wary of shortened URLs and always verify the sender's identity.",
    icon: "🔗"
  },
  {
    title: "Keep Software Updated",
    tip: "Regularly update your operating system and applications. Security patches often fix vulnerabilities that hackers exploit.",
    icon: "🔄"
  },
  {
    title: "Be Cautious with Public WiFi",
    tip: "Avoid accessing sensitive information on public WiFi networks. Use a VPN when connecting to untrusted networks.",
    icon: "📡"
  }
];

export function QuickTipModal({ isOpen, onClose }: QuickTipModalProps) {
  const randomTip = securityTips[Math.floor(Math.random() * securityTips.length)];

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

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{randomTip.icon}</span>
            <h3 className="text-primary">{randomTip.title}</h3>
          </div>

          <p className="text-foreground/80 leading-relaxed">
            {randomTip.tip}
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
      </motion.div>
    </div>
  );
}
