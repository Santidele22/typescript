"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diaryServices_1 = require("../services/diaryServices");
const diaries = (0, express_1.Router)();
diaries.get('/', diaryServices_1.getEntries);
diaries.get('/:id', diaryServices_1.getEntries);
diaries.get('/sensitiveEntries', diaryServices_1.getEntriesWithSensitiveComments);
diaries.get('/sensitiveEntries/:id', diaryServices_1.getEntriesWithSensitiveComments);
diaries.post('/', diaryServices_1.addEntry);
exports.default = diaries;
