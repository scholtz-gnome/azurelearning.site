import { expressApp } from "./app";
import * as http from "http";

const app = expressApp();
const port = 8080;

http.createServer({}, app).listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});