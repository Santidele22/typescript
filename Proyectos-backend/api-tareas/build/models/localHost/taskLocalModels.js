"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const data_json_1 = __importDefault(require("../../data/data.json"));
const data = data_json_1.default;
class TaskModel {
    getAllTask() {
        try {
            if (data !== null) {
                return data;
            }
            throw new Error('No se encontro ninguna tarea');
        }
        catch (error) {
            const errorMessage = error;
            throw new Error(errorMessage);
        }
    }
    getTaskByName(name) {
        try {
            const task = data.filter(task => task.author.toLowerCase().includes(name.toLowerCase()));
            return task;
        }
        catch (error) {
            const errorMessage = error;
            throw new Error(errorMessage);
        }
    }
    getTaskById(id) {
        try {
            const task = data.find(task => task.id === id);
            return task;
        }
        catch (error) {
            const errorMessage = error;
            throw new Error(errorMessage);
        }
    }
    deleteTask(id) {
        try {
            const index = data.findIndex(task => task.id === id);
            let deletedTask;
            if (index !== -1) {
                deletedTask = data.splice(index, 1);
            }
            return deletedTask;
        }
        catch (error) {
            const errorMessage = error;
            throw new Error(errorMessage);
        }
    }
    createTask(newTaskEntry) {
        const newTask = Object.assign({ id: Math.max(...data.map(d => d.id)) + 1 }, newTaskEntry);
        data.push(newTask);
        return newTask;
    }
    updateTask() { }
}
exports.TaskModel = TaskModel;
