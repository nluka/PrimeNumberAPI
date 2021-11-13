import cors from "cors";
import express from "express";
import closestRouter from "./routes/closest";
import rootRouter from "./routes/root";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", rootRouter);
app.use("/closest", closestRouter);

export default app;
