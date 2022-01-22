"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const typeMapping_1 = require("./typeMapping");
const program = new commander_1.Command();
program.version('0.0.5');
program.parse();
inquirer_1.default
    .prompt(typeMapping_1.prompList)
    .then((answers) => {
    typeMapping_1.typeMapping[answers.type]();
});
