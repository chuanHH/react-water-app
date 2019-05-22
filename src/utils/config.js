const host = document.location.host;

export let DEFAULT_BASE_URL = 'http://dev.waterhome.zcabc.com/api';

const apiConfig = {
  'test.waterhome.zcabc.com': 'http://test.waterhome.zcabc.com/api',
  'water-pre.zhongcaicloud.com': 'https://water-pre.zhongcaicloud.com/api',
  'water.zhongcaicloud.com': 'https://water.zhongcaicloud.com/api',
};
DEFAULT_BASE_URL = apiConfig[host] ? apiConfig[host] : 'http://dev.waterhome.zcabc.com/api';

if (process.env.NODE_ENV === 'testApi') {
  DEFAULT_BASE_URL = 'http://test.waterhome.zcabc.com/api';
}