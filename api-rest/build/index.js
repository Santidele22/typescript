"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const corsMiddleware_1 = __importDefault(require("./middleware/cors/corsMiddleware"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api/diaries', diaries_1.default);
app.use(corsMiddleware_1.default);
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
