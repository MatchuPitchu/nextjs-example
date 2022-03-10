// Routing according to Folder Structure
// - pages/news.tsx OR pages/news/index.tsx -> my-domain.de/news
// - to organize nested paths: pages/news/nested-path.tsx OR pages/news/nested-path/index.tsx -> my-domain.de/news/nested-path
// - and so on and so on ...
import type { NextPage } from 'next';
import Link from 'next/link';

const News: NextPage = () => {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
          {/* Navigation in Next with Link Component to preserve SPA feeling
          -> prevents browser default of sending GET request to server
          -> instead it loads new component (here: 'NextJs') and changes URL */}
          <Link href='/news/nextjs'>NextJS</Link>
        </li>
        <li>
          <Link href='/news/react'>React</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
