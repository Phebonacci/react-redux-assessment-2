import newsApi from '../api/newsApi';

const searchNews = (endpoint, keywords, country, page = 1, pageSize = 50) => {
  return newsApi.get(endpoint, {
    params: {
      q: keywords,
      country,
      page,
      pageSize,
    },
  });
};

export const searchTopHeadlines = (keywords, country, page, pageSize) => {
  return searchNews('/top-headlines', keywords, country, page, pageSize);
};

export const searchEverything = (keywords, country, page, pageSize) => {
  return searchNews('/everything', keywords, country, page, pageSize);
};
