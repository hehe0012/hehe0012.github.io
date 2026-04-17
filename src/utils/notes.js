import matter from 'gray-matter';

export function sortNotesByDate(notes, order = 'desc') {
  const multiplier = order === 'asc' ? 1 : -1;

  return [...notes].sort((left, right) => {
    const leftTime = new Date(left.date).getTime();
    const rightTime = new Date(right.date).getTime();

    return (leftTime - rightTime) * multiplier;
  });
}

export function loadMarkdownNotes() {
  const markdownFiles = import.meta.glob('../content/notes/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  });

  const notes = Object.entries(markdownFiles).map(([path, content]) => {
    const { data, excerpt } = matter(content, { excerpt: true });

    return {
      slug: path.split('/').pop().replace(/\.md$/, ''),
      date: data.date || '',
      title: data.title || 'Untitled',
      summary: data.summary || excerpt || '',
    };
  });

  return sortNotesByDate(notes);
}