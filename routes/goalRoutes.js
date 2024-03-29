import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalControllers.js";

const goalsRouter = express.Router();

goalsRouter.route("/").get(getGoals).post(setGoal);
goalsRouter.route("/:id").put(updateGoal).delete(deleteGoal);

export default goalsRouter;

// goalsRouter.put("/:id", updateGoal);
// goalsRouter.delete("/:id", deleteGoal);
// goalsRouter.get("/", getGoals);
// goalsRouter.post("/", setGoal);
