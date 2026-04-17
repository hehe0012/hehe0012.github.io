import { motion } from 'framer-motion';
import { LayoutGrid, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';

function EmptyProjectState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-3xl border border-dashed border-white/[0.12] bg-white/[0.04] p-8 shadow-soft backdrop-blur-xl sm:p-10"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
          <LayoutGrid className="h-10 w-10" />
          <span className="absolute -right-2 -top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-background text-primary shadow-soft">
            <Sparkles className="h-4 w-4" />
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          暂时还没有项目内容
        </h3>
        <p className="mt-3 max-w-md leading-7 text-slate-300">
          你可以先添加项目标题、截图、技术标签和链接。这里会保持整洁的占位布局，等数据到来后自动切换为卡片网格。
        </p>

        <div className="mt-8 grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
          {['添加项目', '补充图片', '填写链接'].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectGrid({ projects = [], className = '' }) {
  if (!projects.length) {
    return <EmptyProjectState />;
  }

  return (
    <div className={`grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 ${className}`.trim()}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          image={project.image}
          title={project.title}
          description={project.description}
          tags={project.tags}
          githubUrl={project.githubUrl}
          demoUrl={project.demoUrl}
          className={`h-full ${index % 3 === 1 ? 'md:translate-y-2' : ''}`.trim()}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;