import mongoose from "mongoose";
import projectSchema from "../schemas/project.schema.js";
import featureSchema from "../schemas/feature.schemas.js";
import { technologySchema } from "../schemas/technology.schema.js";

const projectModel = mongoose.model("Project", projectSchema);

const featureModel = mongoose.model("Feature", featureSchema);
const technologyModel = mongoose.model("Technology", technologySchema);

export const getProject = async (req, res) => {
  try {
    const projects = await projectModel
      .find()
      .populate([{ path: "features" }, { path: "technologies" }]);

    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createProject = async (req, res) => {
  try {
    const newProject = req.body;
    const projectDoc = new projectModel({
      name: newProject.name,
      description: newProject.description,
      liveLink: newProject.liveLink,
      serverLink: newProject.serverLink,
      clientLink: newProject.clientLink,
      technologies: newProject.technologies,
    });
    const project = await projectDoc.save();
    res.status(200).send(project);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
