"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithSensitiveComments = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("../data/diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesWithSensitiveComments = () => diaries;
exports.getEntriesWithSensitiveComments = getEntriesWithSensitiveComments;
const addEntry = () => null;
exports.addEntry = addEntry;
