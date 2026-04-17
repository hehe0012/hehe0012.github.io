import { ArrowRight, BookOpen, Mail, Sparkles, SquareArrowOutUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import ProjectGrid from './components/ProjectGrid';
import { loadMarkdownNotes } from './utils/notes';

const projects = [
  {
    title: '校园活动管理平台',
    description: '一个用于报名、审核和活动回顾的响应式管理后台，面向学生组织和社团使用。',
    tags: ['React', 'Vite', 'Supabase'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '技术笔记站点',
    description: '把零散的学习记录整理成可以搜索和预览的个人知识库，支持 Markdown 内容管理。',
    tags: ['Markdown', 'Tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '数据看板原型',
    description: '以卡片式信息结构展示关键指标，适合快速验证数据洞察和交互节奏。',
    tags: ['Charts', 'Dashboard', 'UI'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
];

const sampleNotes = [
  {
    slug: 'react-performance-tips',
    date: '2026-04-12',
    title: 'React 性能优化清单',
    summary: '从渲染边界、列表虚拟化和状态拆分三个维度梳理常用优化手段。',
  },
  {
    slug: 'tailwind-workflow',
    date: '2026-04-08',
    title: 'Tailwind 组件化落地实践',
    summary: '记录如何用 Tailwind 组织可复用组件，并保持视觉系统的一致性。',
  },
  {
    slug: 'routing-notes',
    date: '2026-03-30',
    title: '路由与页面拆分示例',
    summary: '展示未来如何把主页、项目详情和文章详情拆成独立页面。',
  },
];

let notes = sampleNotes;

try {
  const markdownNotes = loadMarkdownNotes();

  if (Array.isArray(markdownNotes) && markdownNotes.length > 0) {
    notes = markdownNotes;
  }
} catch {
  notes = sampleNotes;
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.24),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.18),_transparent_22%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,1))]" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-soft backdrop-blur-xl">
                  <Sparkles className="h-4 w-4 text-primary" />
                  React + Vite 个人网站
                </div>

                <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  把项目作品集和技术笔记，做成一个干净直接的主页。
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  这里用于展示我做过的项目、常用技术栈和持续更新的 Markdown 笔记。视觉上保持克制，交互上尽量清晰。
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
                  >
                    查看项目
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#notes"
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/30 hover:bg-primary/10"
                  >
                    浏览笔记
                    <BookOpen className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
                  {['React', 'Vite', 'Tailwind CSS', 'Lucide React', 'Framer Motion'].map((item) => (
                    <span key={item} className="rounded-full border border-white/[0.08] bg-white/5 px-4 py-2">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: '示例项目', value: '3' },
                    { label: '示例笔记', value: `${notes.length}` },
                    { label: '技术栈', value: '5+' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-5 shadow-soft backdrop-blur-xl"
                    >
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.05] p-6 shadow-soft backdrop-blur-xl">
                  <p className="text-sm text-slate-400">当前状态</p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">可部署的个人站首页</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    适合 GitHub Pages 的静态结构，后续可以继续接入更多项目和文章。
                  </p>
                </div>

                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.05] p-6 shadow-soft backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">快速入口</p>
                    <SquareArrowOutUpRight className="h-4 w-4 text-primary" />
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <a className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-background/40 px-4 py-3 transition hover:border-primary/30" href="#projects">
                      <span>项目展示</span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </a>
                    <a className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-background/40 px-4 py-3 transition hover:border-primary/30" href="#footer">
                      <span>联系我</span>
                      <Mail className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary/90">Projects</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  项目作品集
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                用卡片网格展示我做过的方向，支持图片、标签和外链，便于后续持续补充。
              </p>
            </div>

            <ProjectGrid projects={projects} />
          </div>
        </section>

        <section id="notes">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary/90">Notes</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  技术笔记预览
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                从本地 Markdown 读取 frontmatter，再按日期排序渲染成列表，方便后续扩展到文章页。
              </p>
            </div>

            <NoteList notes={notes} />
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-lg font-medium text-foreground">hehe0012.github.io</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              一个用于 GitHub Pages 的个人站首页，之后可以继续加文章详情、项目详情和更多交互。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-sm text-foreground transition hover:border-primary/30 hover:bg-primary/10"
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
            >
              <Mail className="h-4 w-4" />
              联系我
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
