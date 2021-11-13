import express from "express";
import getClosestPrime from "../core/getClosestPrime";
import validateNumber from "../validation/validateNumber";

const router = express.Router();

router.get("/", (req, res) => {
  const target = req.query["target"];
  const parsedTarget = validateNumber(target);

  if (typeof parsedTarget !== "number") {
    res.status(400).json({ message: parsedTarget.message });
    return;
  }

  try {
    const closest = getClosestPrime(parsedTarget);
    res.status(200).json({ target: parsedTarget, closest });
  } catch (err) {
    res.sendStatus(500);
  }
});

export default router;
