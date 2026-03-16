import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Roles route working" });
});

export default router;