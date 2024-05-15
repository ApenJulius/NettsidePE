// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm"



dotenv.config();

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: ["src/models/*.ts", "./models/*.js"],
    synchronize: true,
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
app.use(express.json());
app.get("/contact-forms", async (req: Request, res: Response) => {
  try {
    const contactFormRepository = AppDataSource.getRepository("ContactForm");
    const allContactForms = await contactFormRepository.find();
    res.json(allContactForms);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while fetching data");
  }
});

app.post("/contact-forms/submit", async (req: Request, res: Response) => {


  try {
    const contactFormRepository = AppDataSource.getRepository("ContactForm");
    const newContactForm = contactFormRepository.create({
      name: req.body.name.toString(),
      phone: req.body.phone.toString(),
      message: req.body.message.toString(),
    });
    await contactFormRepository.save(newContactForm);
    res.json({ message: "Contact form created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while creating data");
  }
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});