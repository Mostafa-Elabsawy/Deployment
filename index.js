import express from "express";
import * as Routes from "./src/Routes.js";
import { connectDB } from "./DB/connection.js";
import cors from "cors";
connectDB();
const app = express();
const port = process.env.PORT || 4444;
app.use(express.json());
app.use(cors());
app.use("/users", Routes.userRouter);
app.listen(port, () => {
  console.log(`server started at http://localhost:${prot}`);
});
