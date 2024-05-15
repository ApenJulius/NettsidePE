// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm"



dotenv.config();

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: ["src/models/*.ts", "./models/*.js"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })





const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/contact-forms", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/contact-forms", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});