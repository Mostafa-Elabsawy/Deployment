import express from "express";
import * as Routes from "./src/Routes.js";
import { connectDB } from "./DB/connection.js";
connectDB();
const app = express();
const prot = 4444;
app.use(express.json());
app.use("/users", Routes.userRouter);
app.listen(prot, () => {
  console.log(`server started at http://localhost:${prot}`);
});
