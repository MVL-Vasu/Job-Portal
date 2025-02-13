import express from "express";
import { getJobs, getSingleJob } from "../controllers/jobController.js";

const router = express.Router();

// Route to get all jobs data 
router.post("/get-all-jobs" , getJobs);

// Route to get a single job by ID
router.get('/:id' , getSingleJob);



export default router;