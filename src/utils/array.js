/**
 * 将路径拆分成数组
 *
 * /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
 * @param {*} url
 */
export function urlToArray(url = '') {
  const list = url.split('/').filter((i) => i);
  return list.map((item, index) => {
    return `/${list.slice(0, index + 1).join('/')}`;
  });
}

export default { urlToArray };
