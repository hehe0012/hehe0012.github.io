import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { sortNotesByDate } from '../utils/notes';

function formatDate(value) {
  if (!value) {
    return '';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function NoteList({ notes = [], className = '' }) {
  const sortedNotes = sortNotesByDate(notes);

  return (
    <div className={`grid gap-4 ${className}`.trim()}>
      {sortedNotes.map((note, index) => (
        <motion.article
          key={note.slug || `${note.title}-${note.date}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="group rounded-2xl border border-white/[0.08] bg-white/[0.05] p-5 shadow-soft backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-primary/25 hover:bg-white/[0.07]"
        >
          <a href={note.href || '#'} className="block">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>{formatDate(note.date)}</span>
            </div>

            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {note.title}
            </h3>

            <p className="mt-3 line-clamp-2 leading-7 text-slate-300">
              {note.summary}
            </p>

            <div className="mt-5 flex items-center justify-end text-sm text-slate-400 transition group-hover:text-primary">
              <span>阅读更多</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </a>
        </motion.article>
      ))}
    </div>
  );
}

export default NoteList;