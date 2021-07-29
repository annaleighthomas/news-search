export const fetchArticles = async () => {
  const res = await fetch('https://newsapi.org/v2/everything&apiKey=API_KEY');
  const json = await res.json();
  return json;
};

