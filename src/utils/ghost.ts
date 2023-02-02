import GhostContentAPI from '@tryghost/content-api';

const ghostApi = new GhostContentAPI({
  url: 'https://ghost.infocimahi.co',
  key: 'f8fb25d369bdc5cd74236e583c',
  // @ts-ignore
  version: 'v5.26.4',
});

export default ghostApi;
