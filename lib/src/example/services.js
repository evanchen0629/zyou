"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerGroupDeleteById = exports.customerGroupCreateOrUpdate = exports.getSelectList = exports.getBusinessLineListAll = void 0;
/** 业务线列表 */
exports.getBusinessLineListAll = {
    service: {
        url: '/wework-scrm-user/businessLine/listAll',
        method: 'GET',
    },
    prefix: 'Scrm',
};
// 获取客群列表
exports.getSelectList = {
    service: {
        url: '/customerGroup/getSelectList',
        method: 'GET',
    },
    prefix: 'Agent',
};
// 新增/更改客群分类
exports.customerGroupCreateOrUpdate = {
    service: {
        url: '/customerGroup/createOrUpdate',
        method: 'POST',
    },
    prefix: 'Agent',
};
// 删除客群分类
exports.customerGroupDeleteById = {
    service: {
        url: '/customerGroup/deleteById',
        method: 'POST',
    },
    prefix: 'Agent',
};
