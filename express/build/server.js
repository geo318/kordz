"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    origin: '*',
}));
server.use(express_1.default.static('uploads'));
server.listen(3344, () => console.log('Server started on port 3344'));
