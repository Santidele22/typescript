"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("./middleware/cors"));
const task_1 = __importDefault(require("./routes/task"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
app.use(cors_1.default);
app.use('/task', task_1.default);
app.listen(PORT, () => {
    console.log(`Server is Fire at http://localhost:${PORT}`);
});
