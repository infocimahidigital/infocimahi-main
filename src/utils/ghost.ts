import GhostContentAPI from '@tryghost/content-api';

const ghostApi = new GhostContentAPI({
  url: 'https://article.infocimahi.co',
  key: 'eb2706b5bf139ed434b6106e3c',
  // @ts-ignore
  version: 'v5.26.4',
});

export default ghostApi;
