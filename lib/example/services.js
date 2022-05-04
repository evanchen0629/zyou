"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookDeleteById = exports.bookCreateOrUpdate = exports.getBook = void 0;
/** 获取图书 */
exports.getBook = {
    service: {
        url: '/getBook',
        method: 'GET',
    },
    prefix: 'Scrm',
};
// 更改图书
exports.bookCreateOrUpdate = {
    service: {
        url: '/bookCreateOrUpdate',
        method: 'POST',
    },
    prefix: 'Agent',
};
// 删除图书
exports.bookDeleteById = {
    service: {
        url: '/bookDeleteById',
        method: 'POST',
    },
    prefix: 'Agent',
};
