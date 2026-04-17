function parseFrontmatter(markdownText) {
  const content = markdownText.replace(/^\uFEFF/, '');

  if (!content.startsWith('---\n')) {
    return { data: {}, body: content };
  }

  const endMarkerIndex = content.indexOf('\n---', 4);

  if (endMarkerIndex === -1) {
    return { data: {}, body: content };
  }

  const rawFrontmatter = content.slice(4, endMarkerIndex).trim();
  const body = content.slice(endMarkerIndex + 4).trim();
  const data = {};

  rawFrontmatter.split('\n').forEach((line) => {
    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');

    if (key) {
      data[key] = value;
    }
  });

  return { data, body };
}

function getSummary(markdownBody) {
  const cleanedText = markdownBody
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/\n{2,}/g, '\n')
    .trim();

  if (!cleanedText) {
    return '';
  }

  return cleanedText.length > 120 ? `${cleanedText.slice(0, 117)}...` : cleanedText;
}

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
    const { data, body } = parseFrontmatter(content);
    const summary = data.summary || getSummary(body);

    return {
      slug: path.split('/').pop().replace(/\.md$/, ''),
      date: data.date || '',
      title: data.title || 'Untitled',
      summary,
    };
  });

  return sortNotesByDate(notes);
}