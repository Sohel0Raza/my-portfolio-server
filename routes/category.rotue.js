import expess from "express"
import { createCategory, getCategory } from "../controller/category.controller.js";

const categoryRouter = expess.Router()

categoryRouter.get("/", getCategory)
categoryRouter.post("/", createCategory)

export default categoryRouter;
