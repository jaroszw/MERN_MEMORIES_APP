import express from "express";
import { signin, signup, googleSingin } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/googlesingin", googleSingin);

export default router;
