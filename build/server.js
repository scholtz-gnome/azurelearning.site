"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const app = app_1.expressApp();
const port = 8080;
http.createServer({}, app).listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
});
