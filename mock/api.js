import mockjs from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ 'id|+1':0,name: '@city', 'value|1-100': 50}],
  }),
};