import express from "express";
import {
  addCandidate,
  getCandidates,
  updateCandidate,
  deleteCandidate,
} from "../controllers/candidateController.js";
import { adminAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", adminAuth, addCandidate);
router.get("/", adminAuth, getCandidates);
router.put("/:id", adminAuth, updateCandidate);   // ✅ Update route
router.delete("/:id", adminAuth, deleteCandidate); // ✅ Delete route

export default router;
