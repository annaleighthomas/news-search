export const fetchArticles = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?apiKey=316703d8c9e4497e83bd8b3dc992e8ba&q=britney`);
  const json = await res.json();
  return json;
};

