import express from "express"
import { createSkill, getSkills } from "../controller/skill.controller.js"
export const skillRoute  =  express.Router()

skillRoute.get("/", getSkills)
skillRoute.post("/", createSkill)
