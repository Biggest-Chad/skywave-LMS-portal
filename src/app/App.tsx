import { useState } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { SwipableCardRow } from './components/SwipableCardRow';
import { QuickTipModal } from './components/QuickTipModal';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuickTipOpen, setIsQuickTipOpen] = useState(false);

  const gamesCards = [
    {
      id: '1',
      title: 'Phishing Detector',
      subtitle: 'Spot fake emails and links',
      image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400',
    },
    {
      id: '2',
      title: 'Password Fortress',
      subtitle: 'Build unbreakable passwords',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400',
    },
    {
      id: '3',
      title: 'Cyber Chase',
      subtitle: 'Track down security threats',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    },
    {
      id: '4',
      title: 'Encryption Quest',
      subtitle: 'Master data protection',
      image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400',
    },
    {
      id: '5',
      title: 'Security Simulator',
      subtitle: 'Defend against attacks',
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=400',
    },
  ];

  const resourcesCards = [
    {
      id: '6',
      title: 'Network Security 101',
      subtitle: 'Essential protection basics',
      image: 'https://images.unsplash.com/photo-1751448555253-f39c06e29d82?w=400',
    },
    {
      id: '7',
      title: 'Malware Defense Guide',
      subtitle: 'Protect your systems',
      image: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?w=400',
    },
    {
      id: '8',
      title: 'Privacy Handbook',
      subtitle: 'Safeguard your data',
      image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=400',
    },
    {
      id: '9',
      title: 'Incident Response',
      subtitle: 'Handle security breaches',
      image: 'https://images.unsplash.com/photo-1654498770512-c9045a3b6be0?w=400',
    },
    {
      id: '10',
      title: 'Security Tools',
      subtitle: 'Essential software arsenal',
      image: 'https://images.unsplash.com/photo-1549605659-32d82da3a059?w=400',
    },
  ];

  const policiesCards = [
    {
      id: '11',
      title: 'Access Control Policy',
      subtitle: 'User permission guidelines',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400',
    },
    {
      id: '12',
      title: 'Data Protection Policy',
      subtitle: 'Information security rules',
      image: 'https://images.unsplash.com/photo-1654588831193-0285dab84d5a?w=400',
    },
    {
      id: '13',
      title: 'BYOD Guidelines',
      subtitle: 'Personal device security',
      image: 'https://images.unsplash.com/photo-1662638600476-d563fffbb072?w=400',
    },
    {
      id: '14',
      title: 'Incident Reporting',
      subtitle: 'Security breach protocols',
      image: 'https://images.unsplash.com/photo-1618060932014-4deda4932554?w=400',
    },
    {
      id: '15',
      title: 'Compliance Standards',
      subtitle: 'Regulatory requirements',
      image: 'https://images.unsplash.com/photo-1638947604157-d259d219eeee?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-background dark overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>

          <h1 className="text-foreground">CyberLearn</h1>

          <div className="w-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* Hero Section with Quick Tip */}
        <div className="px-6 py-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,217,255,0.1),transparent)]" />

            <div className="relative z-10">
              <p className="text-foreground/70 mb-2">Daily Security Challenge</p>
              <h2 className="text-foreground mb-6">Stay Sharp, Stay Secure</h2>

              <button
                onClick={() => setIsQuickTipOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-5 h-5" />
                <span>Get Quick Tip</span>
              </button>
            </div>

            <div className="absolute top-4 right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Card Rows */}
        <div className="mt-6">
          <SwipableCardRow
            title="Games"
            cards={gamesCards}
            category="game"
          />

          <SwipableCardRow
            title="Resources"
            cards={resourcesCards}
            category="resource"
          />

          <SwipableCardRow
            title="Policies"
            cards={policiesCards}
            category="policy"
          />
        </div>

        {/* Stats Section */}
        <div className="px-6 mt-8 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-2xl p-4 text-center">
              <div className="text-2xl text-primary mb-1">24</div>
              <div className="text-xs text-foreground/60">Completed</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-4 text-center">
              <div className="text-2xl text-accent mb-1">85%</div>
              <div className="text-xs text-foreground/60">Success Rate</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-4 text-center">
              <div className="text-2xl text-primary mb-1">12</div>
              <div className="text-xs text-foreground/60">Streak Days</div>
            </div>
          </div>
        </div>
      </main>

      <QuickTipModal isOpen={isQuickTipOpen} onClose={() => setIsQuickTipOpen(false)} />
    </div>
  );
}