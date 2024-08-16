import mongoose from "mongoose";
import { skillSchema } from "../schemas/skill.schemas.js";

const skillModel = mongoose.model("Skill", skillSchema);

export const getSkills = async (req, res) => {
  try {
    const skills = await skillModel.find();

    res.status(200).send(skills);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const createSkill = async (req, res) => {
  try {
    const newSkill = req.body;

    const skillDoc = new skillModel({
      name: newSkill.name,
      image: newSkill.image,
      techTecnology:newSkill.techTecnology,
      skillLevel: newSkill.skillLevel,
    });

    const skill = await skillDoc.save();

    res.status(200).send(skill);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
