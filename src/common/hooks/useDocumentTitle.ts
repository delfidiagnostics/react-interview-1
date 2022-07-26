import { useEffect, useState } from 'react';

const useDocumentTitle = (title: string | string[]) => {
  title = title instanceof Array ? title.join(' | ') : title;
  const [documentTitle, setDocumentTitle] = useState(title);
  const prefix = 'Limon | ';
  useEffect(() => {
    document.title = `${prefix}${documentTitle}`;
  }, [documentTitle]);

  return [documentTitle, setDocumentTitle];
};

export { useDocumentTitle };
