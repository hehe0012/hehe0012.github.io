import { motion } from 'framer-motion';
import { ExternalLink, SquareArrowOutUpRight } from 'lucide-react';

function ProjectCard({
  image,
  title,
  description,
  tags = [],
  githubUrl,
  demoUrl,
  className = '',
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.05] shadow-soft backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-primary/25 hover:bg-white/[0.07] ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{description}</p>
        </div>

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-sm text-foreground transition hover:border-primary/30 hover:bg-primary/10"
          >
            <SquareArrowOutUpRight className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;