import newsApi from '../api/newsApi';

export const searchTopHeadlines = (keywords, country, page = 1, pageSize = 50) => {
  return newsApi.get('/top-headlines', {
    params: {
      q: keywords,
      country,
      page,
      pageSize,
    },
  });
};

export const searchEverything = (keywords, page = 1, pageSize = 50) => {
  return newsApi.get('/everything', {
    params: {
      q: keywords,
      page,
      pageSize,
    },
  });
};
