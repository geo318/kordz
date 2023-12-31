"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    origin: '*',
}));
server.use(body_parser_1.default.json());
server.use(express_1.default.static('uploads'));
server.listen(4444, () => console.log(`Server started on port 4444`));
