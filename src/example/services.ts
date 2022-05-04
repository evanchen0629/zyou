/** 获取图书 */
export const getBook = {
  service: {
    url: '/getBook',
    method: 'GET',
  },
  prefix: 'Scrm',
}
// 更改图书
export const bookCreateOrUpdate = {
  service: {
    url: '/bookCreateOrUpdate',
    method: 'POST',
  },
  prefix: 'Agent',
}
// 删除图书
export const bookDeleteById = {
  service: {
    url: '/bookDeleteById',
    method: 'POST',
  },
  prefix: 'Agent',
}
