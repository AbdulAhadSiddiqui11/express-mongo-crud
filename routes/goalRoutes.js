import express from "express";

const goalsRouter = express.Router();

goalsRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

goalsRouter.post("/", (req, res) => {
  res.status(200).json({ message: "Set goals" });
});

goalsRouter.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

goalsRouter.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

export default goalsRouter;
