import express from "express";

const router = express.Router();

// @ts-ignore
router.get("/", (req, res) => {
  res.status(301).redirect("https://github.com/nluka/prime-number-api");
});

export default router;
