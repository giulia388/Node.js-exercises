"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const app = (0, express_1.default)();
app.get("/", (request, response) => {
    response.send("Il server è stato avviato!");
});
const port = 3030;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});