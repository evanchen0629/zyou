"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = async (url) => {
    const res = await axios_1.default.get(url);
    // fs.writeFileSync('./swagger.json', JSON.stringify(res.data, null, '\t'))
    return res.data;
};
