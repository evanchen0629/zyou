/** 业务线列表 */
export const getBusinessLineListAll = {
  service: {
    url: '/wework-scrm-user/businessLine/listAll',
    method: 'GET',
  },
  prefix: 'Scrm',
}
// 获取客群列表
export const getSelectList = {
  service: {
    url: '/customerGroup/getSelectList',
    method: 'GET',
  },
  prefix: 'Agent',
}
// 新增/更改客群分类
export const customerGroupCreateOrUpdate = {
  service: {
    url: '/customerGroup/createOrUpdate',
    method: 'POST',
  },
  prefix: 'Agent',
}
// 删除客群分类
export const customerGroupDeleteById = {
  service: {
    url: '/customerGroup/deleteById',
    method: 'POST',
  },
  prefix: 'Agent',
}
