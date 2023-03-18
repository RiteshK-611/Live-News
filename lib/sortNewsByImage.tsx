const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const soertedNewsResponse = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return soertedNewsResponse;
};

export default sortNewsByImage;
