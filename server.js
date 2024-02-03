import express from "express";
import { config } from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import goalsRouter from "./routes/goalRoutes.js";

const dotenv = config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port on ${port}`));
