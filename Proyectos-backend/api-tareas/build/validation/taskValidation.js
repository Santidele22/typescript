"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = exports.validatePartialtask = void 0;
const zod_1 = require("zod");
const taskSchema = zod_1.z.object({
    author: zod_1.z.string().max(50),
    date: zod_1.z.string().transform(value => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(value)) {
            throw new Error('La fecha debe estar en el formato YYYY-MM-DD');
        }
        return value;
    }),
    task: zod_1.z.string().max(100),
    done: zod_1.z.boolean()
});
function validateTask(input) {
    return taskSchema.safeParse(input);
}
exports.validateTask = validateTask;
function validatePartialtask(input) {
    return taskSchema.partial().safeParse(input);
}
exports.validatePartialtask = validatePartialtask;
