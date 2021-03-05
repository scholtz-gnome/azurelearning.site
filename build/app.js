"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express = require("express");
const bodyParser = require("body-parser");
function expressApp() {
    const app = express();
    app.use(bodyParser.json());
    app.get("/", (_, res) => {
        res.send("Welcome to Azure Learning");
    });
    return app;
}
exports.expressApp = expressApp;
