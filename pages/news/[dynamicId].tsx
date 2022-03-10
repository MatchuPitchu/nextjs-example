// Create Dynamic Path
// - name file like [SOME_NAME] to create dynamic path like my-domain.de/news/:id
// - to extract dynamic value, use useRouter hook and property router.query.YOUR-DYNAMIC-FILENAME
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const NewsItem: NextPage = () => {
  const router = useRouter();
  const newsId = router.query.dynamicId;
  console.log(newsId);
  // send request to the backend API to fetch the news item with newsId

  return <h1>Dynamic Path: NewsItem</h1>;
};

export default NewsItem;
