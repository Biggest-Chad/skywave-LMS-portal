import { X, User, Settings, BookOpen, Shield, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../../imports/image.png';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: User, label: 'Account Settings', href: '#' },
    { icon: Settings, label: 'Preferences', href: '#' },
    { icon: BookOpen, label: 'Learning Progress', href: '#' },
    { icon: Shield, label: 'Security Center', href: '#' },
    { icon: LogOut, label: 'Sign Out', href: '#' },
  ];

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-50 overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl text-sidebar-foreground">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-sidebar-foreground" />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent transition-colors group"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
                  <span className="text-sidebar-foreground">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-sidebar-border">
            <div className="px-4 py-3 rounded-lg bg-sidebar-accent">
              <p className="text-sm text-sidebar-foreground/70 mb-1">Current Level</p>
              <p className="text-sidebar-foreground">Cybersecurity Apprentice</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-sidebar-border">
            <div className="flex items-center justify-center px-4">
              <img src={logo} alt="Skywave Technologies" className="w-full max-w-[200px] h-auto" />
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
