import { Menu, Sparkles } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '项目', href: '#projects' },
  { label: '笔记', href: '#notes' },
  { label: '联系', href: '#footer' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm font-medium text-foreground">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-soft">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>个人网站</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#footer"
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-sm text-foreground transition hover:scale-[1.02] hover:border-primary/30 hover:bg-primary/10"
        >
          <Menu className="h-4 w-4 md:hidden" />
          <span className="hidden md:inline">快速联系</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;