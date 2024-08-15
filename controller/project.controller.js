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

export const createProject = async (req, res) => {
  try {
    const newProject = req.body;

    const savedFeatures = await featureModel.insertMany(newProject.features);
    const savedFeatureIds = savedFeatures.map((feature) => feature._id);

    const savedTechnologies = await technologyModel.insertMany(newProject.technologies);
    const savedTechnologyIds = savedTechnologies.map(technology => technology._id);

    const projectDoc = new projectModel({
      name: newProject.name,
      liveLink: newProject.liveLink,
      serverLink: newProject.serverLink,
      clientLink: newProject.clientLink,
      features: savedFeatureIds,
      technologies: savedTechnologyIds,
    });

    const project = await projectDoc.save();

    res.status(200).send(project);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
