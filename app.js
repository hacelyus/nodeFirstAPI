import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import patientRouter from "./routes/patientRoute.js";
import doctorRouter from "./routes/doctorRoute.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/patients", patientRouter);
app.use("/doctors", doctorRouter);

const start = async () => {
  await connectDB();
  app.listen(port, console.log(`app listening on port ${port}`));
};
start();
