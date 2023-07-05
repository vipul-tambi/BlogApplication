import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";
dotenv.config();
const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// connections
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));
