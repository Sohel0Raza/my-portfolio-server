import express from "express"
import { getProject } from "../controller/project.controller.js"
const projectRouter = express.Router()

projectRouter.get("/",getProject)

export default projectRouter
                                                                 