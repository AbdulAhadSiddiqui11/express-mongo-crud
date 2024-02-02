import express from "express";
import { config } from "dotenv";

import goalsRouter from "./routes/goalRoutes.js";

const dotenv = config();

const port = process.env.PORT || 3000;

const app = express();

app.use('/api/goals', goalsRouter);

app.listen(port, () => console.log(`Server started on port on ${port}`));
