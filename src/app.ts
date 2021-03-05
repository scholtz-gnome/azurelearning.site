import * as express from "express";
import { Express, Request, Response } from "express";
import * as bodyParser from "body-parser";

export function expressApp(): Express {
  const app = express();

  app.use(bodyParser.json());

  app.get("/", (_, res: Response) => {
    res.send("Welcome to Azure Learning");
  });

  return app;
}
