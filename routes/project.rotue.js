import express from "express";
import { createProject, getProject } from "../controller/project.controller.js";
const projectRouter = express.Router();

projectRouter.get("/", getProject);
projectRouter.post("/", createProject);

export default projectRouter;
